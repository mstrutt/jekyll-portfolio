---
layout: post
title: Old notes from an EpicFEL past
preview: I found some old hand-written notes from a conference when my laptop had died. Although late, hopefully they'll still be of some value
date: 2016-01-24 16:50:00
categories:
- notes
- fel
- epicfel
- accessibility
- es6
---

## 14 lines of JS that saved the BBC millions - [@JamieKnight](https://twitter.com/JamieKnight)

- The brief: fix search, like Google, by Friday?
- Solr, great but it would cost "Millions"
- dumb idea: massive client-side whitelist
- Quick-fixes only hide the problem
- Learned
	- scale when needed
		- but not an excuse to do bad work
	- culture
		- the way we do stuff
		- prototype in production behind a flag
		- dependencies are hard
	- process
		- go with the flow
		- don't force agile
		- some value is better than no value
		- Mandolin for AB deploying
			- use with caution
- "The value of the coder is not the code they write, but the problem they solve"

## Performance + Optimisation - [@grudelsud](https://twitter.com/grudelsud)

- How to save 250,000,000 seconds in 6 months
- AngularJS - gulp - browserify - boilerplate
- GAE webapp2 is fine for most cases
- Optimise the model to maximise data throughput
- simple CSS transitions / models
- [speakerdeck.com/jaffathecake/rendering-without-lumps](https://speakerdeck.com/jaffathecake/rendering-without-lumps)
- dynamic images, only request the size you need
- do your own load-testing if you can
	- try to create meaningful tests to simulate users' behavior
- POST-optimisation lets you optimise against real-world situations
- UNIT9 and B-Reel Meetups

## Burn your select tags

- gov.uk
	- open, agile, multi-disciplinary
	- have to cater to a very wide range of users
	- often users are doing something that isn't enjoyable
- select issues (dates)
	- confusing focus / highlight with selection
	- trying to type into select boxes
	- unable to close select
	- can't pinch-zoom select options
- text inputs are much easier
- don't use select for dates
- "dropdowns should be the UI of last resort" - [@lukew](https://twitter.com/lukew)
- options
	- will text input suffice
	- small discrete sets -> radio buttons
- select is good for long list where "you would know when you see it"
- but consider custom widget
- Steve Faulkner has good accessibility checklist
- We do the hard work to make things simple
- design with data!

## iOS Development with JS and COrdova, is it time to swift? - [@arnaudbernard](https://twitter.com/arnaudbernard)

- Cordova - exposes native capabilities through JS APIs
- lots of plugins, both officially and 3rd party
- rise in AngularJS Ionic apps
- can reuse lots of JS that already exists
- simulate app in browser with Ripple chrome extension
- assets size doesn't matter
- less compatibility worries
- Mapps
	- google maps can be slow
	- map kit is limited
- Images aren't cached without plugins
	- File Transfer plugin
- could pass computation-heavy tasks to Native C
- you lose some of the nice built-in native goodness
- [speakerdeck.com/jpsim/swift-for-javascript-developers](https://speakerdeck.com/jpsim/swift-for-javascript-developers)
- swift will make plugin development easier

## Making custom widgets accessible with ARIA - [@LeonieWatson](https://twitter.com/LeonieWatson)

- "Accessibility shouldn't stifle creativity and motivation, it should be part of it"
- `role` can give purpose to semantically-neutral elements
- Native properties such as `alt`
- `aria-label` can differentiate nav (or other) elements
- `tabindex="0"` for focus
- `role` such as `button` for interaction
- `role="button"` should capture space and enter
- basket summary `aria-live="assertive" aria-atomic="true"`
	- `atomic` reads whole content, not just the change
- Tabs
	- `role="tablist"
	- `role="presentation"` ignores element

## ES6: JavaScript Grown Up - [@Jack_Franklin](https://twitter.com/Jack_Franklin)

- Arrow functions
	- `function (x) { return x * 2; }`
	`(x) => x * 2;`
	- arrow functions maintain scope of parent (`this`)
	- can use `{}` with arrow functions
- Classes
	- sort of
	- constructors, parents via a `super`
- `prop: function() { ... }`
	`prop() { ... }`
- Multi-line strings with `'\n'`
- `${name}` in strings
- `var [a, b, c] = [1, 2, 3]`
- `var {name, age} = getPerson()`
- default values
	`function (val: default) { ... }`
- `total(... [1, 2, 3]) === total.call(null, [1, 2, 3])`
- block scope using `let foo = 2` within `{}`
- modules
	- `export {foo, bar}`
	- `import {foo} from 'app'`
- Generators, pause execution and wait for a value
- `yield` async code that reads sync
- Traceur compiles ES6 to ES5
- esnext / es6-module-transpiler

