---
layout: post
title: Best viewed with...
preview: My notes from Adam Onishi's talk at State of the Browser 2015
date: 2015-09-12 15:00:00
categories:
- notes
- lws
- sotb
- sotb5
- progressive enhancement
---

# Best viewed with... - [Adam Onishi](@onishiweb)

- the "Browser War" is bigger than ever, with more major players
- end up with a bad situation where you have a feature that many browsers are missing
- developer-first development?
	- pick the latest and greatest just for fun
- progressive enhancement
- "vague, but exciting"
- make fewer assumptions, focus on the user's tasks and goals
- control
	- once it's down the network it's out of our control
- progressive enhancement ~ defensive enhancement
- what do we know?
	- at least one request was successful
- baseline
	- we send them one file, a starting point from which to enhance
	- performance
	- first render within a single file
- perceived performance
	- make it feel much quicker than it actually is

## Progressively enhanced performance

### Render blocking content

#### CSS

- you have to download it
- must parse the whole cascade before it can start to render
- is *still* an enhancement
- critical path CSS
	- a small amount inline in the head
	- async the rest with JS
- tooling
	- addyosmanni/critical
	- filamentgroup/loadCSS

#### Fonts

- some browsers wait for full font download before rendering text
- async font loading available for TypeKit now
- font loading API
	- giving control to the developer
	- choice of timeouts
	- choose to show text or not before font is downloaded
	- browser support is "alright"
- CSS font rendering spec draft

#### JavaScript 

- "1.1% of people aren't getting JavaScript enhancements (1 in 93)" 
- *not* always needed, what reason do you have for your content to rely on JS
- is there a better way?
	- universal JavaScript (isomorphic)
	- rendering with a Node.js server
- React
	- React.renderToString() - doesn't require a DOM
- Ember's fastboot (not yet production ready)
- checkout GoCardless' splash pages
- this gives us back control

### The network

- assumption
	- you don't *have* to have access to the web to get online
- Service Worker
	- web vs native
	- parts of the web will be offline
	- can cache things for performance
	- Development flow
		- important to know how to refresh your service worker
	- https only
	- how much can I cache?
		- as much as the browser will let you
		- browser can clean it up as and when it pleases

## Concluding

Is it the return of the browser wars? Well no, not really. Use progressive enhancements to only do things when they're supported.
