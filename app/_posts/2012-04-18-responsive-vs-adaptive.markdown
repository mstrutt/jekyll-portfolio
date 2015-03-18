---
layout: post
title: Responsive vs Adaptive
date: 2012-04-18 22:22:00
categories:
- responsive
- adaptive
- design
---

We've all heard of "[responsive design](https://twitter.com/rwd)" and it's a word that's been thrown around a lot. Sadly, as with all good things on the web, it has become somewhat a buzz word. "Our site is now fully responsive" has become about as meaningful as "full social media integration" (A link to their twitter and facebook pages). I'm going to do my best to clear a few things up, and introduce you to a new word: "adaptive".

Perhaps that's a little harsh, but I've seen the launch of a mobile site described as a site "going responsive". Simply put, no. Responsive is taking on the idea of one web: you make one website for all devices, instead of making in a different version of a website for each device type. Obviously there's a lot more to it than that, or I'd be explaining in a tweet rather than writing a full post about it.

## A common misconception

When someone makes what they call a responsive site, often they have some very specific, hard-coded, breakpoints to shift the size down for iPad resolution, and iPhone resolution. There's nothing wrong with that per-say, but if I were to load up the site on a device sized say 10px smaller than an iPad, then I would be served the iPhone version with a large amount of margin either side of a column of content that is less than half the width of my screen. This is not responsive, this would be adaptive.

Adaptive sites are tailored to adapt to specific break points, such as the sizes of key devices used by the target audience. There is nothing wrong with making an adaptive site, it's a vast improvement over a completely static site, and it can be a lot more cost effective to do. There a plenty of great adaptive frameworks such as [Skeleton](http://getskeleton.com/), which is based around a 16-column grid system.

## Truly responsive

Responsive sites take this idea to the next level. The idea is that no matter what size device you view the website through, it responds to this and scales appropriately. The style of coding for this can be very different to conventions used in the past. Absolute widths and rigidity are very rarely used, in favour of percentages and fluidity, with then perhaps a minimum and a maximum width declared. Breakpoints are not set in stone, instead they are added as you go, while building you can scale the browser and see at what point content needs to be adjusted - for example a 3 column section collapsing down to 2 columns (or vice-versa).

This doesn't mean you need to be sticking in a [media query](http://www.css3.info/preview/media-queries/) for every pixel change, you should still try and group them where possible, but don't have set breakpoints in your head before testing in a browser.

## The long and short of it all

Neither method is wrong, responsive is a cleaner approach than adaptive, but both are far better than having multiple static sites. Just be aware that there is a difference, but whichever side of the line you fall on, be proud of what you achieve.