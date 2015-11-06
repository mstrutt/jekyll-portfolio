---
layout: post
title: Animation performance on the web
preview: My notes from Ada Rose Edwards's talk at State of the Browser 2015
date: 2015-09-12 16:00:00
categories:
- notes
- lws
- sotb
- sotb5
---

# Animation performance on the web - [Ada Rose Edwards](@lady_ada_king)

- Aiming for the feeling of a native app
	- shouldn't notice a difference
	- shouldn't feel like struggling
- scaling and dragging should feel stuck to your finger
- don't show what the user can't interact with

## Performance, what is jank?

- 60fps
- 16ms to render a frame
- 60fps with the occasional hiccup looks far worse than just running at 30fps
- typically longer render times are typically caused by *layout* and *paint*
- by changing a layout property, you can end up causing the browser to recalculate the rest of the page
- paint is when 
- great resource: [Paul Lewis's CSS Triggers](http://csstriggers.com)
- don't
	- change the height, then calculate what it is immediately
	- repeatedly add text in a loop, join it together then append it once
	- this is known as layout thrashing
- calculate many times, apply onces
- checkout fastdom, gives you an async API for DOM reads and writes
- why is layout so difficult?
- don't animate layout
	- animating the width of a text block is super expensive
- if something bad is happening in a modal, the browser isn't smart enough to realise that it's separate from the rest of the page
	- there's an experimental API for `contain: strict;` to tell the browser that it is
	- possible to stop the reflow of a document by isolating something before it's recalculated (not necessarily recommended)
- the internet has threads
	- it's possible to do some calculations off the main thread
	- example: sending something to the physics engine to process on a different thread
- can trade pre-caching for performance
	- don't try to eat all your data at once, have it in little bits
- data visualisation can be passed to WebGL to be processed on your graphics card
- "you don't want to accidentally set fire to a piece of cardboard attached to someone's face"
