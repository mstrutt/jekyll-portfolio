---
layout: post
title: Converting from LESS to SASS
date: 2013-08-11 17:59:24
categories:
- less
- sass
- scss
- css
---

Initially I fell down on the [LESS](http://lesscss.org/) side of this divide, the main reason being the ease of it. All you have to do is include the javascript file and you're away. Syntactically it's a whole lot easier to use as well, there's almost no extra syntax to learn, and writing custom mixins takes no time at all.

With the extra syntax to learn, and the additional setup on any machine I wanted to dev from, I never really gave [SASS](http://sass-lang.com/) much of a look. That is until I started back at work. The first project I got put on starting back at MICROS already had SASS integrated into it, so I had the opportunity to give it a proper trial.

My first impressions were as expected, for the most part they're the same. Yes they use different symbols for variables but nest in the same way. On the plus side, I like the greater availability of third party mixin libraries (we chose [bourbon](http://bourbon.io/)) instead of having to sit down and write my own. But on the down side It felt a little unusual adding in the extra `@include` and `@extend` syntax.

The main thing I like about SASS though is the stability. Others had mentioned it in blog posts I'd seen across the web, but I hadn't truly appreciated it until working with LESS on a big project. Sometimes LESS just throws seemingly random errors, often the feedback for which is completely unhelpful. It also tries to carry on through errors in a way which would seem helpful, but can lead to horrible amounts of debugging further down the line. I had one case where less was compiling despite a bracket mismatch in one of the files causing a huge amount of altered styles. SASS on the other hand has precise and strict error handling. If there is an error in a file, it will tell you where, and will stop compiling, simple as that.

##Making the switch

Since making the decision to use SASS over LESS as my pre-processor of choice, I decided to convert the styling on my portfolio. Aside from renaming the file extensions, it was a relatively easy syntax change to make. I managed to do most of the changes with a couple of regex 'find and replace' statements, with the debugger telling me all the while what line the next error was on. The rest was swapping class imports for `@extend` and changing the syntax of a couple of the custom LESS mixin I had written.

##A couple of last gripes

I'm not entirely sure I like the way `@extend` works. This may just be my aversion to anything that tries to take control of my code, but sometimes the way it renders the code isn't what you expect to happen, and things like backup colors can get stipped out. I also think all of the extra syntax is not completely necessary, and that makes it less accessible, it's part of the reason I didn't choose SASS in the first place.