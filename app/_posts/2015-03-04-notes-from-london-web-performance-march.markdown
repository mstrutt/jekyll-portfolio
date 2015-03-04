---
layout: post
title: London Web Performance March
preview: My notes from London Web Performance's March event - Responsive and Fast by Michael Gooding and Ellen van Keulen from Akamai.
date: 2015-03-04 20:59:38
categories:
- notes
- perfmatters
- webperf
- performance
---

## Responive and Fast - [Michael Gooding](https://twitter.com/Michael_G_81) and [Ellen van Keulen](https://twitter.com/evankeulen)

[slides available on speaker deck](https://speakerdeck.com/mgooding1981/ldn-web-perf-rwd-and-fast-iterating-live)

- Display cost = bytes per pixel
- Images are a big offender, no images can half the load time of a page
- Responsive images can save on average 70% of our image weight (image weight being 2/3rd page weight usually)
- Srcset, picture element, and client hints are available to us in various browsers
- For picture element, take a look at [Scott Jehl's PictureFill](https://github.com/scottjehl/picturefill)
- `display:none;` images are still downloaded, even though they're not displayed
- Use js to add src for images that might be hidden on certain sizes
- Be careful with JS added images, can't be found with pre-parsers
- Consider lazy loading images that are significantly below "the fold" in product listing pages etc
- What worked for one site may not work for another site
- Look at [Paul Kinlan's Chrome Bookmarklet](https://gist.github.com/PaulKinlan/6284142) for analysing critical CSS ([video demo](http://addyosmani.com/blog/detecting-critical-above-the-fold-css-with-paul-kinlan-video/))
- Unused JavaScript (like image gallery stuff) - don't load it
- Conditionally load the JS you need using JS
- [SPOF-O-Matic](https://chrome.google.com/webstore/detail/spof-o-matic/plikhggfbplemddobondkeogomgoodeg) to disable certain scrips to see what effects they have on load
- [DOM Monster plugin](https://chrome.google.com/webstore/detail/dom-monster/hlimphkgopfdlelabkioalhfjfblnclk) can give hints on markup bloat
- You *can* use UA sniffing to implement RESS and reduce the page load (*personally I wouldn't advise it though*)
- Consider alternative formats to "just JPEG" for images. Picture element can help
- Bonus: Adjust image quality based on network conditions
- Aim to get your RWD site on mobile to be as light as a typical `m.` site
- Free [Responiveonsive and Fast](http://bit.ly/rf-free) eBook

- Incoming network information API could be useful
- [http://edgeconf.com](http://edgeconf.com)
