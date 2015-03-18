---
layout: post
title: Notes from Front-end London March
preview: My notes from Front-end London's March Event - How to Win Designers and Influence Developers from Adam Rogers, Exploring CSS3's 3D space from Daniel Grant, and Can Code Quality be Measured? from Tim Ruffles.
date: 2014-03-28 00:14:07
categories:
- notes
- fel
- quality
- css3
- 3d
---

## How to Win Designers and Influence Developers - [Adam Rogers](https://twitter.com/rodreegez)

- Project Management
- People don't always do what you tell them
- To make great things, we have to work together and enjoy it!
	- Happier teams build better products
- "You can delegate a task, but you can't delegate responsibility"
- Recommend: How to win friends and influence people
- When something goes wrong, don't criticise
	- just try to fix the problem
	- Work together to prevent it happening again
- Say "Thank you" and mean it
- Worry about what you can *directly* control
- Communicate needs
- Get feedback, talking is often the most productive way of solving problems
- Asking questions
	- Helps avoid arguments
	- Saves face
	- Your team are smart. Use them!
- Don't be a jerk!
- Homework:
	- next time something goes horribly wrong, give credit instead of criticism
	- Help someone fix something, go through it with them
	- Ask someone a question

## Exploring CSS3's 3D space - [Daniel Grant](https://twitter.com/danieljohngrant)

Check out the [highly impressive demonstrations](http://codepen.io/collection/gKutL/) Daniel put together, including a CSS Solar System

- The basics: transform
	- translate
	- rotate
- Make things 3D-er by adding `perspective` (distance away)
- To create a 3D shape, you have to combine lots of flat shapes on different planes
- `transform-style: preserve-3d` to apply a transform to all children elements
- `backface-visibility: hidden` to stop the back of a flipped object being shown
- `transition` will show you the frames in between
- Ooh, pretty thing is pretty!
- Is 3D CSS useful? Yeah, but as a learning tool

## Can code quality be measured? - [Tim Ruffles](https://twitter.com/timruffles)

- Sidekick.js a code quality tracker
- Code quality: Who does it anger?
- WTF is *good* code?
- To extent it depends on us, "Is this *my* kind of code?"
- Can we leave taste aside?
	- OOP or functional or procedural
- What can we actually measure?
	- Doing the same thing three ways
	- I can't change anything
	- This looks like Java
	- It just works
- Quality
	- Concise
		- DRY (Don't Repeat Yourself)
		- flay-js: structural duplication detection
		- Single Point Of Truth
	- Simple
		- KISS, but nobody *tries* to write complicated code
		- Does one thing, well
		- Low detail, attempt to abstract everything
		- As few responsibilities as possible
		- Low difficulty
			- Measuring local difficulty, how many paths through your code?
			- How many variables, how many things do you have to keep in your head at once?
		- Few dependencies
			- The more interconnected the code, the harder it is to change
		- Having a module system != Modularity
	- Readable
		- Avoid idioms and bringing other languages with you
		- Good naming. Make it longer the more it's going to be around
		- Variables and function names are better than bad comments
		- Comment, when the intention isn't clear from the code
		- Comments != documentation
		- Doctest.is, unit tests from documentation
	- Extendable / Changeable
		- Try and keep things small
	- Testable
		- Test 0 - can you actually test your code?
		- Code that isn't testable, generally isn't quality code
	- Does measured = managed? Yes, so long as you use it responsibly
	- Good conversation starter
	- Nice wall-o-metrics
	- Stay proud of your team's code
