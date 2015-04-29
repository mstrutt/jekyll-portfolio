---
layout: post
title: Converting from LESS to SASS
date: 2013-08-11 17:59:24
preview: Initially I fell down on the LESS side of this divide, the main reason being the ease of it. All you have to do is include the javascript file and you're away. Syntactically it's a whole lot easier to use as well, there's almost no extra syntax to learn, and writing custom mixins takes no time at all.
categories:
- less
- sass
- scss
- css
---

## Updated (05/05/2014):

It would seem that a lot of people coming here are looking for a *how* more than a *why*. If this is you, then [jump to the regex below](#making-the-switch).

## Starting with LESS

Initially I fell down on the [LESS](http://lesscss.org/) side of this divide, the main reason being the ease of it. All you have to do is include the JavaScript file and you're away. Syntactically it's a whole lot easier to use as well, there's almost no extra syntax to learn, and writing custom mixins takes no time at all.

With the extra syntax to learn, and the additional setup on any machine I wanted to dev from, I never really gave [SASS](http://sass-lang.com/) much of a look. That is until I started back at work. The first project I got put on starting back at MICROS already had SASS integrated into it, so I had the opportunity to give it a proper trial.

## Trying out SASS

My first impressions were as expected, for the most part they're the same. Yes they use different symbols for variables but nest in the same way. On the plus side, I like the greater availability of third party mixin libraries (we chose [bourbon](http://bourbon.io/)) instead of having to sit down and write my own. But on the down side It felt a little unusual adding in the extra `@include` and `@extend` syntax.

The main thing I like about SASS though is the stability. Others had mentioned it in blog posts I'd seen across the web, but I hadn't truly appreciated it until working with LESS on a big project. Sometimes LESS just throws seemingly random errors, often the feedback for which is completely unhelpful. It also tries to carry on through errors in a way which would seem helpful, but can lead to horrible amounts of debugging further down the line. I had one case where LESS was compiling despite a bracket mismatch in one of the files causing a huge amount of altered styles. SASS on the other hand has precise and strict error handling. If there is an error in a file, it will tell you where, and will stop compiling, simple as that.

## Making the switch

Since making the decision to use SASS over LESS as my pre-processor of choice, I decided to convert the styling on my portfolio. Aside from renaming the file extensions, it was a relatively easy syntax change to make. I managed to do most of the changes with a couple of regex 'find and replace' statements in SublimeText, and for anything that didn't catch running SASS's watch command would constantly tell me what and where the next error was.

*NB: SublimeText uses \1 \2 and so on to reference the bracket-matches, other editors may use $1 $2 or something different.*

### Replacing variables syntax

The only different between variables in LESS and variables in SASS is the character they use, so with the exception of the reserved words of the [CSS at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) (`@media`, `@keyframes` etc) and the LESS reserved word `@include`, you can just swap the `@` character for the `$` character.

Find: `@((?!media|include|charset|document|font-face|import|keyframes|page|supports)[a-zA-Z_]+)`
Replace: `$\1`

### Replacing includes with extends

On the assumption that when you `@include` one class inside another, you do it without brackets, where as including a mixin you use the brackets, you can safely replace `@include` with `@extend` to map this to SASS. Although the functionality is slightly different, the resultant styling should be the same.

Find: `@include(\W+[.#][^(;]*;)`
Replace: `@extend\1`

### Fixin' the mixin

This is the most difficult to straight-swap, and when I did it originally I ended up just doing it by hand as I only had a few. That said, we can make some assumptions of pattern to help us along the way.

#### Step 1

We can assume that all remaining instances of `@include` will be to include SASS mixins, and so can remove the `.` or `#` from the front

Find: `(@include\W+)[.#]([^(;]*\()`
Replace `\1\2`

#### Step 2

By assuming that LESS mixins are either a class or an ID, but still end with a bracket, then they can now be identified with this pattern.

Find: `[.#]([^(;]*\()`
Replace: `@mixin \2`

Replacing the declaration with SASS's `@mixin` directive. This works well for simple cases, but there are some more complex scenarios - like nested mixins - that may still require manual tweaking.

### Finishing up

Now all the automated parts are done, it's down to some manual tweaking for any errors. You can run SASS's watch command (`sass --watch input.scss:output.css`) so that each time a file is saves, SASS will attempt to compile, and alert you of the first error it finds. The errors are far more helpful than the equivalent in LESS, and the resolutions usually fairly simple to see. When SASS compiles into CSS, you are error free.

## A couple of last gripes

I'm not entirely sure I like the way `@extend` works. This may just be my aversion to anything that tries to take control of my code, but sometimes the way it renders the code isn't what you expect to happen, and things like backup colours can get stripped out. I also think all of the extra syntax is not completely necessary, and that makes it less accessible, it's part of the reason I didn't choose SASS in the first place.

### Several months on (updated: 05/05/2014)

There are still some situations where I feel that LESS is more powerful than SASS. Mainly it's speed, not just in easy to get up and running with, but it's compilation time is really fast (to the point it could run in browser) and although the official command-line version didn't have a watch command, the fact that it's JavaScript-based makes node versions of the compiler both easy, and without limitation of language change. In the past I've used [banshee](https://www.npmjs.org/package/banshee) to compile when I save, and the CSS is there ready when I refresh.

One of the main things that has annoyed me about SASS more recently is how slow it can get on large projects. Sometimes taking 4-6 seconds just to show a one-line change on a large project. There is an interesting looking project where [SASS is being rewritten in C](https://github.com/hcatlin/libsass), but as you'd expect, it's a bit behind when it comes to new features, and doesn't compile the CSS *exactly* the same as the ruby version.
