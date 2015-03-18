---
layout: post
title: Notes from Front-end London January
preview: My notes from Front-end London's January Event - AngularJS from Todd Motto; Are you browsing comfortably? from Steve Workman; and ServiceWorker and the offline web from Tom Ashworth
date: 2014-01-30 23:17:54
categories:
- notes
- fel
- angular
- javascript
- tv
- ux
- service worker
- offline
---

## AngularJS - [Todd Motto](https://twitter.com/toddmotto)
- Client side MVC js framework
- Focus on data-driven, not DOM manipulation
- Modern web
	- Client side templating
	- Web components / shadow Dom
	- HTML5 data- attributes
	- Single page apps
	- More JavaScript
- MVC
	- Model - data coming from the server
	- View - HTML and components for DOM rendering
	- Controller - mates the two together
- Two way data binding
	- Live updates / syncs between updating the model client and server side
- Handlebar-esk templating language
- Scoped functions for callback-less data manipulation (no DOM)
- Templating - scalable, reusable and fast components
- Directives - reusable chunks of code / logic
- Dom programming - HTML is now the dynamic language eg: ng-switch
- Filters - instant DOM filtering
- Factory - abstract logic (dry)
- 'Thinking Angular' - forget the dom exists.

## Are you browsing comfortably? - [Steve Workman](https://twitter.com/steveworkman)
- The Web on TV
- Most people can get some form of internet on their TVs, most through games consoles
- There are more games consoles sold, than smart phones
- TV, you're usually far away - Microsoft's "10ft experience"
- Font sizes need to be big on TV... Double it!
- Browser viewport on TV is all over the shop
- "Relying on viewport lead to arguably poor designs." - Luke W
- TV remotes are complicated enough as it is
- Second screen apps try to fill the gap
- Voice input will work well (some day)
- You can assume there's a D-pad. That's about it
- No solution, so puppies
- Pointer / Touch events working group, working on some kind of API
- Do you *use* the browser on your TV? "No"
- Your TV in 2013 has the power of about an iPhone 3Gs
- Are there any solutions?
	- Big companies are making their TV sites *completely* different
	- RWD rules do *kind of* all right
- Designing for TV, "a big circle of nightmares"
- Media types - just about *all* respond to screen
- Do media queries with `em`
- If we can't tell that it's a TV, perhaps we should ask?
- "Couch Mode"
- Internet TV is just the tip of the iceberg - what about wearables?

## ServiceWorker and the offline web - [Tom Ashworth](https://twitter.com/phuunet)
- Offline - Why do we care?
	- We don't have as much connection as we'd like to think
	- Awesome places and poor connection go hand in hand
- Massive issues with space constraint for storing things locally
- When are you *actually* online
- [#offlinefirst](https://twitter.com/search?q=%23offlinefirst) the network is a *potentially-unavailable resource*
- ServiceWorkers
	- giving you a durable and reliable cache
	- Requests can be handled and routed through the cache instead of the network
	- All promise-based
	- http://github.com/slightlyoff/ServiceWorker
	- Not in browsers yet :(
- &lt;live code&gt;
- Worker *will* pickup cross-origin requests - you *can* cache 3rd party assets
