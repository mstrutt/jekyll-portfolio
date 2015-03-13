jekyll-portfolio
================

[ ![Codeship Status for mstrutt/jekyll-portfolio](https://www.codeship.io/projects/58c32b10-a70a-0131-231e-3e5c9af62d7d/status)](https://www.codeship.io/projects/18952)

My portfolio / blog ([mstrutt.co.uk](http://mstrutt.co.uk)), built using the Jekyll static site generator.

## Environment

This project requires an environment with `ruby` and `node` with `npm`.

## Prerequisites

This project relies on the global installation of the ruby gem `jekyll` and the npm package `grunt-cli`

### Suggested install

```
npm install
npm install -g grunt-cli
gem install jekyll
```

## Some grunt commands

### Main environment tasks

- `grunt` - Alias for `grunt serve`
- `grunt build` - Compiles source files, then jekyll generates static site into the `build` folder, 
- `grunt dist` - Builds, then adds in asset minification & legacy stylesheet into the `dist` folder
- `grunt serve` - triggers a `grunt build` then starts a connect server in the `build` folder, watches for changes to rebuild
- `grunt serve:dist` - targets the `dist` folder instead of `build`
- `grunt test` - runs tests (currently just an alias for `eslint`)

### Some useful subtasks

- `grunt build:prep` - Cleans the `.tmp` and `build` folders, then copies the basic app into `.tmp`
- `grunt build:css` - Compile Sass into CSS and automatically adds the right vendor prefixes
- `grunt build:minify` - Minifies all CSS and JavaScript, switches html to use minified source
- `grunt match_media` - Generate legacy stylesheet

For a full list of tasks registered for this project, run `grunt --help`