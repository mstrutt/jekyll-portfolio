---
layout: post
title: Accessibility and how to get the most out of your screenreader
preview: My notes from Edd Sowden's talk at State of the Browser 2015
date: 2015-09-12 10:30:00
categories:
- notes
- lws
- sotb
- sotb5
- accessibility
---

# Accessibility and how to get the most out of your screenreader - [Edd Sowden](@edds)

## What even is a table? A quick look at accessibility APIs

- gov.uk should work for everyone
	- big screens
	- small screens
	- fast computers
	- slow computers
	- crappy library computers
- large data tables on small screens
	- don't really work
	- try adding `overflow: scroll`?
		- DON'T
		- table loses all context in the screenreader
		- add it to a wrapper div
-but what affect does *blank* this have on screen readers?
	- only way to know is to try it
- there's voice over options you can enable baked in to OS X

### Fixing the mobile table

- try `<table role="table">`
- enable the Accessibility options for chrome dev-tools (experimental)

### Accessibility API

- 4 parts
	- role
	- name
	- state
	- children 
- browser builds up an accessibility tree and hands it over to the API
- on OS X you can view the full accessibility tree for what sits under your mouse
	- Xcode > Accessibility inspector

### The minimum viable table

- just a single sell on its own
- in all browsers, isn't read as a table (or "not interesting")
- browsers have heuristics in them to protect screen reader users from table layout-websites
- two rows, two cells each
	- only IE recognises it
- 20 rows
	- accepted by all
- add a table summary
	- all but IE accept it
- add a table heading
	- all browsers now still read it as a table
- `display: block`
	- only IE accepts it as a table
	- add border-bottom to cells
		- table
	- add background-color to cells
		- table again
		- collapse the border
			- no longer a table
	- is it "zebra-striped"? Then definitely a table!

### But what does this all mean?

- don't just rely on valid HTML
- the only thing you can do is listen to your website
- don't try and redefine what your elements are
