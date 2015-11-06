---
layout: post
title: Mind the gap
preview: My notes from Chris Heilmann's talk at State of the Browser 2015
date: 2015-09-12 12:30:00
categories:
- notes
- lws
- sotb
- sotb5
- ie
---

# Mind the gap - [Chris Heilmann](@codepo8)

- web development has always been about gaps
- we did weird alignment things with the alignment of our code, removing the issues introduced by IE 6 & 7
- the star-hack, IE 6 & 7 were cool with it. Others, not so much
- stop trying to work around the issues, feedback to the browser vendors so they can fix it?
- abstractions on top of the browser to help us fix the issues... jQUery
- we can get rid of the abstraction once the browser vendors catch up
	- except we never do
- a lot of the web is not working the way it should
- the average page
	- 15 seconds - the average speed to wait to fully load
	- 5.5 seconds to interact
	- 2MB in size
	- 170 resources
	- missing basic image optimisations
- whose fault is this?
	- pretty much ours
	- all these cool things we *could* be using
	- web development is still governed by looks alone
	- clients expect the same on *every* device
	- speed trumps quality in releases
	- "make it work now, fix it later", but late never comes
	- we try to impress each other
- not *everybody* is responsible for innovating the web, Some of us should just concentrate on keeping the wbe a solid foundation
- there are so many solutions about the industry, it's crazy, you can't keep up with them all

> my job was to kill Internet Explorer

- presenting Microsoft Edge
- you have IE11 hidden away in there too, you can't break the web, IE11 will load sites using old technology
- http://dev.modern.ie/tools/staticscan/ - also available on [github](https://github.com/MicrosoftEdge/static-code-scan)
- the biggest issues
	- aggressive sniffing
		- don't fix for the browser, fix the specific version
	- outdated libraries and polyfills
	- if it works in iOS Safari, that's what matters, regardless of the official spec
	- edge had to account for 4200+ issues from people developing for other specific browsers (like -webkit-only prefixes)

## Learned from working for browser creators

- every developer mistake gets catered for
- the pressure is immense
- a score of 10% in feature tests makes no sense
- most speed increases come from fixing bad developer code
- stop giving people a massive set of tools to auto-fix things
- stop fully supporting old browsers, give them a basic site and enhance with feature detection
- stop with the quick fixes
- keep things accessible for everyone (no technical baseline to using a website)
- we're not in a healthy state right now as a community
	- stop building just to impress each other
	- we feel rushed and not good enough - all the time
	- we feel it's all going slow, while not using the latest developments
- first step to happiness is: make it happen
	- improve basic skills, see what's good on [caniuse.com](http://caniuse.com)
	- start helping people
	- report problems, demand basic features (not hot, new, half-baked ones)
	- reach out beyond your echo chamber, tell those from the outside 
