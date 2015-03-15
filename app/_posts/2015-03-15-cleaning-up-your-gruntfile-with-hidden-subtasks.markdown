---
layout: post
title: Cleaning up your Gruntfile with hidden subtasks
preview: A Gruntfile can become less-manageable quite easily when there are multiple things wanting to run the same set of tasks. For example, the steps to compile CSS might always be to run sass and then autoprefixer, but this would be both part of the main build task, required as part of any dist task there may be, and then run on watch any time a .scss source file changes.
date: 2015-03-15 10:27:14
categories:
- grunt
- build
- automation
---

> [Jump to the code](#the-end-result) if that's all you're looking for

## The problem

A Gruntfile can become less-manageable quite easily when there are multiple things wanting to run the same set of tasks. For example, the steps to compile CSS might always be to run `sass` and then `autoprefixer`, but this would be both part of the main `build` task, required as part of any `dist` task there may be, and then run on watch any time a `.scss` source file changes.

To avoid this duplication and keep things manageable, an obvious solution is to register a named task to handle this.

```js
grunt.registerTask('buildCSS', ['sass', 'autoprefixer']);
```

This defines one place for this step to me managed from, creates some other problems of its own. All registered grunt tasks will show up in the list available from `grunt --help`, there is nothing but naming convention to group related tasks like this (`buildConfig`, `buildCSS`, and `buildJS`), and to any other developer, it may not be obvious that these are only partial steps, and not really something to be run individually.


## The solution

### Target to the rescue

Grunt has this concept of targets, where a task can have many parts to it in the configuration, which can be selected individually by their target name. If no target is specified, then all parts are run. Running `grunt --help` wont list the available targets of a task, only the top level tasks available, this essentially makes the targets like the "hidden tasks", that many have asked for to be included in grunt.

When registering a task, a longer form can be used which allows writing a function which accepts the target as an argument. In its simplest form, this looks like:

```js
grunt.registerTask('task-name', 'Description of the task', function(target) {
	if (target === 'foo') {
		// Do one thing
	}

	// Do another
});
```

Grunt tasks can be run from within this using `grunt.task.run(['foo', 'bar'])`

To go back to the `build` example at the start, css could become a target of the build tasks

```js
grunt.registerTask('build', 'build everything, or just the css', function(target) {
	if (target === 'css') {
		return grunt.task.run(['sass', 'autoprefixer']);
	}

	grunt.task.run([
		'foo',
		'build:css',
		'bar'
	]);
});
```

which also allows calling one target from another without any issue.

### Cleaning it up

Using this structure it's possible to specify multiple targets to run different sets of tasks, and still have a default option to run if there is no target, but having a long line of `if` statements will quickly get messy, and using a `switch` statement where previously we have a config object is counter intuitive.

To return to a more natural config object, but still run just the specified target with a `default` option as a fallback

```js
grunt.registerTask('task-name', 'Description of the task', function(target) {
	var tasks = [
		foo: ['task-a', 'task-b'],
		bar: ['task-c', 'task-d'],
		default: [
			'foo',
			'bar',
			'task-e'
		]
	];

	grunt.task.run(tasks[target] || tasks['default']);

	// Do another
});
```

This runs the specified target if it matches one of the keys or our `tasks` object, and if no target is specified, or one doesn't match, then the default task is run. The default tasks is where the full process should happen, and should contain all the other parts plus more.

### The end result

To return to the earlier scenario, here is a real-world example of what the build task could look like:

```js
grunt.registerTask('build', 'Build all, or parts of, the site', function(target) {
	var tasks = {
		css: ['sass', 'autoprefixer'],
		js: ['wrap', 'jshint'],
		default: [
			'clean:build',
			'build:css',
			'build:js',
			'copy:build'
		]
	};

	grunt.task.run(tasks[target] || tasks['default']);
});
```

From this, a call to `grunt build` without a target specified will perform the default task (a full build), but any of the subtasks specified can be called using their target. `build:css` and `build:js` can be used from the both `watch` task and internally within the full `build` task, ensuring the same exact steps are carried out. Any changes to the compilation of css or js can now be made in one place, with full confidence that this will be universal.

> To see a full working example checkout the [Gruntfile for my portfolio](https://github.com/mstrutt/jekyll-portfolio/blob/develop/Gruntfile.js)

## Some closing thoughts

For me, this seems like the most maintainable way to structure parts of the build progress, it's very readable, all in one place, and doesn't pollute the namespace with extra tasks that would rarely (if ever) be called directly. After being on the side of wanting a way to register hidden or private grunt tasks for quite some time, I'm now perfectly happy without them, and if they are ever included, I think I'd continue to structure my build steps in this way regardless.