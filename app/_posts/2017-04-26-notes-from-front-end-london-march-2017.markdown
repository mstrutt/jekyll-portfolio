---
layout: post
title: Notes from Front-end London, March 2017
preview: My notes from Front-end London's March Event - Reflect and refactor by Melinda Seckington, Sizing with content by Oliver Williams, and The Open Metaverse by Shaun Dunne
date: 2017-04-26 20:54:10
categories:
- notes
- fel
- vr
- css
---


## Reflect and refactor - [Melinda Seckington](https://twitter.com/mseckington)

- Number one thing to learn it “learning to adapt”
- Things will always change
- How to figure out what's next?
- Small agile team, multidisciplinary
- Retrospectives for projects, but why not for ourselves?
- Otherwise you create the human equivalent of technical debt
- Reflect
	- Why do we reflect with our teams?
		- Improve how we do
		- Learn from what we did
		- Expose what we’re thinking
	- We often reflect naturally when we don't have anything else to think about
	- Make explicit time for reflection
	- Schedule in a personal retrospective
	- Long term & short term
	- Long term
		- At least one prompt should help you
		- What motivates you? (Drive, Daniel H Pink)
			- Autonomy - self directed
				- Tasks
				- Time
				- Team
				- Technique
			- Mastery
				- Urge to get better at something that matters to *you*
				- Why?
			- Purpose
				- Something that has meaning to you and is important
		- What are your six objects?
			- That represent what you do, or should do more of
			- Abstract
			- You could get those physical objects as a reminder
			- What down what you do, six things
			- How would you represent them as objects?
		- What would you tell your past and future self?
			- Reflect on how you have changed over time
			- Write a letter to your past self - highlights what you’ve learned
			- What would your past self write back? What would have surprised you?
			- Write a letter to your future self, date and seal it up, wait to open it
	- Short term
		- Examine a short period (day week month) and make it regular
		- Find a time in the right mindset
		- Take notes - means you can look back
		- Find a format that works for you
		- **Define a tangible goal**
- Refactor
	- like code
	- It’s about keeping things in a healthy state,easy to fix and change things as well as add new things
	- How do we make it easier to add or changes will sort behaviour
	- Habit loop
		- Sign we need to change something - cue
		- Change it - routine
		- Celebrate - reward
		- Repeat
	- The power of Habit,Charles Duhigg
	- Adapt existing loops
		- Recognise what you already do and add to it
		- Easier to modify a. Existing habit than make a new one
	- Create new loops
		- Find a new cue that doesn't have a habit already
		- What are thing that happen to you regularly?
	- Find new cues and rewards
		- Eg instead of just trying to run, play zombiesrun
		- Make an RPG of leveling up yourself
	- Think about all three aspects
- Always thinking about “what’s next?”

## Sizing with content - [Oliver Williams](http://twitter.com/css_grid)

- Intrinsic sizing in CSS
- Using the content itself to size things
- Three new properties
	- `fit-content`
	- `min-content`
	- `max-content`
- `fit-content`
	- very useful with block level elements to make it the size of its content but keep flow
	- Can still use `margin: auto;`
	- Will automatically change the size when the content does
- `min-content`
	- On a paragraph would be as wide as it's longest word
	- As small as the largest unbreakable piece of content (a word, an image)
	- Text no wider than an image that’s with it
- `max-content`
	- Probably the least useful
	- You can use it with `max-width` to avoid horizontal scroll bars

## The Open Metaverse - [Shaun Dunne](http://twitter.com/shaundunne)

- (Less obvious) Uses of VR
	- Education
	- Health
	- Stories
	- Entertainment (non-games)
		- (E-)Sports
		- Live music events
- Web VR
	- Is not proprietary. Anyone can put anything out there
	- Easier to share a url than an app
	- The Web Wins
- [webvr.rocks](https://webvr.rocks/)
	- A surprisingly large amount of support for VR from browsers
- Mobile Safari is the new IE
	- Awaiting “Braver VR”
- [w3c.github.io/webvr/spec/1.1/](https://w3c.github.io/webvr/spec/1.1/)
	- Includes an extended gamepad API
- WebVR Polyfill available to allow other input devices to control the content instead
- Lots of abstractions available so you don’t have to work directly with WebGL - it’s hard
- Cost
	- Cardboard, cheap (although limited)
	- Daydream + phones ~ 600
	- Decent gaming laptop + Oculus for about the price of a new macbook
- Aframe is a good starting point
- [glitch.com](https://glitch.com/) like a full stack codepen
	- Great when you have internet
- Aframe
	- Super easy to build some 3d shapes using web components
	- Built in visual inspector
	- Sits on top of three.js
		- You can write your own components for it
	- [aframe.io/a-saturday-night](https://aframe.io/a-saturday-night/)
	- [aframe.io/blog](https://aframe.io/blog/)
- Future
	- WebVR 2.0
		- Next year some time
	- Content problem
		- A lot of games
		- Not a lot of much else
	- A lot of problems that need to be designed away
	- Web AR?
		- Argon.js
		- Ar.js
	- Unity supporting Web VR?
- “Snackable” VR - little bits of content you consume for about 2mins
