---
layout: post
title: Notes from &#35;lwssausage
preview: My notes from London Web Standards June Event &#35;lwssausage - Bruce's tour of the sausage factory by Bruce Lawson, and Building awesome responsive experiences with JavaScript by Jonathan Fielding.
date: 2014-07-16 20:59:35
categories:
- notes
- lws
- lwssausage
- rwd
- javascript
---

## Bruce's tour of the sausage factory [Bruce Lawson](https://twitter.com/brucel)

- Politicians are like sausages: almost exclusively lips and arseholes
- The first railway coaches were standardised to the width of 2 horse arses (4 ft 8 1/2 in)
- Open standards give us interoperable software
- It is not known who originally compiled the list of CSS colo(u)rs
- Retrospective standardisation: things that are used as a standard before they're officially documented
- Interoperability almost killed the web before HTML5 came along
- A spec that is not defined, is - definition - not a very good spec
- P*****s are completely anti-standards
- HTML5 is not trying to support old browsers. It's trying to support *old content*.
- A lot of spec decisions are based on backward compatibility and interoperability
- ServiceWorker forces you to do the work, but actually does what you want, instead of relying on the *magic* of AppCache
- Low-level APIs appear to be much more useful than High-level ones
- Web Components put *us* in the standards driver-seat

## Building awesome responsive experiences with JavaScript [Jonathan Fielding](https://twitter.com/jonthanfielding)

- Responsive websites are about more than just how a website *looks*
- Different layouts for compacting tabs (tabs / accordion) [a good example](http://codepen.io/mpiotrowicz/pen/gocmu)
- Light boxes suck on mobile
- Paged carousels can just stack on mobile
- It's *okay* to have a different journey on mobile
- Change functionality on viewport
	- window.onresize
	- window.matchMedia
		- .add listener
- Libraries
	- [SimpleStateManager](http://www.simplestatemanager.com/)
	- [Enquire.js](http://wicky.nillia.ms/enquire.js/)
- Optimise the user's journey to their device
