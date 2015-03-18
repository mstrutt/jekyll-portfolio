---
layout: post
title: Do I need jQuery?
date: 2013-09-01 19:57:07
categories:
- javascript
- jquery
---

I've seen quite a few blog posts recently about the use of jQuery in tutorials. Questioning if it's teaching the next generation of coders to be reliant on a library. In addition to this it's often an argument in the comments on stackoverflow as to why the accepted reply is the jQuery version instead of the "vanilla" JavaScript version. In light of this I have decided to look into some of the benefits and drawbacks of jQuery reliance, and see if I can rewrite my site (which is pretty light on JavaScript) to no reply on third-party JavaScript libraries.

Before I get into this, let me put it out there: I think jQuery is great. As a Front End Developer it makes my life easier almost every day, and worrying about cross-platform issues is a thing of the past. But I do think that all too often jQuery is an assumed part of a website when it doesn't need to be.

In terms of reasons not to use jQuery in a website, instead of not in a tutorial, one clear reason is performance. While I appreciate that minified, gzipped and served from a popular CDN this overhead can be significantly reduced, it is still there, and as developers, we need to be aware of it. In the early stages my portfolio redesign I found myself, without thinking, including jQuery simply to toggle a class onclick, a task easily achievable without the extra request and page weight. While I could have reduced this impact by building only the recent modular version and only including the parts I need, but then this seems to defeat the point of the CDN and in some cases would actually increase loading time.

I remember when I first started to write JavaScript, the number of if statements I had to write with different methods for different browsers, all to achieve just one thing. If nothing else, jQuery made it easier to write code. You simply write what you want to do, and jQuery will handle the how. But in terms of browser compatibility, we are in a much better place now that we used to be. A lot of common methods are implemented the same way in all "popular modern browsers", and so it's possible to write a lot less vanilla code to achieve what you want than you used to have to.

I'm not advocating that we stop using jQuery and other libraries all together, because that would be stupid, but I think we've become too dependant on them. Before including a library in a project, take a moment to think. Ask yourself: "What you'll be using it for?", "How many times will I be using it?", "How big will the project be before and after including it?" and "How else could I achieve the same result?".

## Rewriting my site

I decided that for the minimal amount I was making use of it's power, it wasn't worth keeping jQuery in my site, so I set about rewriting my code in vanilla JavaScript (you can see the [before](/assets/scripts/site.jquery.js) and the [after](/assets/scripts/site.js)). I'll be honest, the process left feeling both empowered and humiliated. Empowered that I'd managed to do it, knew quite a bit of it, and didn't have to write many more lines, but humiliated about how much I'd had to google, how many silly mistakes I made, and really why I hadn't done this in the first place for a lot of it. The main pain-point wasn't actually the ajax request as I thought it would be, but instead it was replacing the toggleClass function, which took a few more lines of code and some regex. In total instead of the 93.6kb of jQuery (packed), I wrote an extra ~1kb of JavaScript, making my page-weight for scripts now only 11.8kb and 1 less http request. To my mind, a pretty decent saving.

## Closing thoughts

I think for the point of tutorials certainly, it makes sense to show the fewer lines of code that jQuery offers, but it's important to at least reference other methods, or suggest that this could be done with "vanilla" JavaScript. I think those who are less experienced with JavaScript may suffer from a dependency on libraries to get things done, and we should think more carefully about which libraries, if any, are right for the project we are working on