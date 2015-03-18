---
layout: post
title: It's not always Internet Explorer's fault
date: 2012-05-27 17:56:23
categories:
- ie
- css3
---

It's a bold statement I know, and a brave title to use, but hear me out, what I say here is worth noting.

Internet Explorer is our least favourite browser. It's often the slowest to support new features, fix it's bugs and generally makes our lives as front-end developers hard. But I've noticed lately that people seem to be all too quick to jump on the hate wagon and blame IE for the broken layout of their code.

## Bad code leads to bad sites

It seems obvious, but it's true, and sadly a lot of the better, more modern browsers are far too forgiving of that fact. Quite a number of times I've been asked to look at an IE bug for someone else to find that it's the result of a broken box model, or that they've used invalid markup, perhaps a typo. While testing in Chrome, the browser noticed the silly little mistake and fixed it for them, then when it comes to testing IE later on down the line, it looks broken and they don't think to look at themselves.

## Code well, and know its limitations

Again, code well is simple advice, but advice that is often overlooked. I'll be the first to admit that about a year ago, my code wasn't up to scratch. I'd write it badly, then I would hate on IE later when it didn't work. But I've moved on from there and bettered myself, as we should all be trying to do constantly.

Respect the box model, you cannot give box properties to an inline element, this will only ever end in disaster, and when it does, you only have yourself to blame. When you use the lovely new features of CSS3, which I fully endorse, do so with caution. If you're using a pseudo-selector or attribute which is known to not be supported in older browser, use a fallback, or consider an alternative method. This job is already made a lot easier for us with the help of [HTML5 Please](http://html5please.com/) and [When can I use...](http://caniuse.com/) documenting how good browser support is, and the feature detection of [Modernizr](http://modernizr.com/). It is now easier than ever to write beautiful websites that work well across a very wide range of browsers.

## A simple sign-off

Get the basics right, code well, and that nightmare of loading your shiny new site in Internet Explorer will become a thing of the past.