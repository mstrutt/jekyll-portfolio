---
layout: post
title: Notes from Front-end London, February 2016
preview: My notes from Front-end London's February Event
date: 2016-02-25 19:00:00
categories:
- notes
- fel
---

## CSS Modules: Who, What, Where, When, Why?! - [Christopher Pearce](https://twitter.com/chrisui)

### Who?

- @geelen @markdalgleish @sokra

### What?

- locally scoped CSS
- only accessible by direct reference
- OOCSS and BEM feel a bit like avoiding the problem, not tackling it head-on
- CSS Modules takes your styles and creates globally unique class names for the selectors
- It's a fundamental change to the way we think about and write out styles
- It's a guarentee that the code you're writing isn't impacted by the code outside it

```
import styles from 'buttons.css'

const Button = () => ()
	<button className={styles.button} />
);

### Where?

- Component-driven applications, with many developers and many components

### When?

- Anytime!
- Will require special loading / compilation
- Live happily alongside global CSS

### Why?

- "fundamental change" can sound quite scary
- "The Three Code-ilities"
	- Maintainability
		- very easy to fix a bug or add a new feature, without worying about external side-affects
	- Scalability
		- Infinite number of developers can work on their components without conflicts
	- Stability
		- Testing is made easier, much harder to break things

### How to stay DRY?

- There's the ability to provide defaults to be used
- You can still use your usual post-optimisation workflow after CSS Modules have run
- You can use Sass/LESS infront of CSS Modules


## Design Sprints - Making your design process agile - [Jo Franchetti](https://twitter.com/thisisjofrank)

- Often an issue with handing over designs to development
- Need a way of including design in our agile development process
- Breaking the wall
- Get more people involved in the design process
	- the more people creating ideas, the more problems you solve upfront
- Run a design sprint
	- a fast structured way of developing your ideas
	- solve one design problem
	- 5 stages (1 day each): unpack sketch decide prototype test

### Running a sprint

- Prepare
	- choose a problem
	- gather your team, including
		- a stakeholder
		- a manager
		- a developer
		- someone who knows the users
	- clear your calendars
	- schedule your user-testing in advance
	- book a room, for the whole sprint
	- gather supplies (postits, pens, whiteboard, research data)
- Unpack
	- outline what to do
	- share all the data and research
	- make sure everyone is involved and heard
	- work together to create user stories (customer and stakeholder)
		- try a flow diagram
- Sketch
	- break up the stories into sensible chunks
	- crazy 8
		- fold a piece of paper into 8 and sketch an idea on each section
		- everyone votes on their favourite ideas
		- take the best to the next step
- Decide
	- what ideas to prototype to show the user
	- what you want to get out of the user testing
	- how you can measure if the prototype is a success
- Prototype
	- depends on the skills in your team: code / indesign / powerpoint even
	- just make something the user can interact with (what would you *expect* to happen when you click here)
	- use real copy in your prototype, not lorem ipsum
	- ensure the script is right for the testing, work with the person running it
- Test
	- make sure everything is all set up and ready, double check
	- you'll need a way to listen in, everyone involved in the previous steps should see it
	- you want to get ways to improve your idea, and your product as a whole
	- everyone records their opinions to compare

### WHat next?

- plan them a bit ahead to be able to use the results
- you might just need to fine tune it, you may need to break it down further or test it again
- even if they hated it, it's good to find out with only a day spent developing the prototype

### Learn from our mistakes

- Designers might resist it a bit to begin with
- Get everyone involved and
- Make sure you have a product stakeholder involved
- Hit your deadlines (don't run over on the sprint)
- Talk about your user testing results
- Double check your AV for testing (seriously)

JUST DO IT


## The Art of Reduxion - [Daniel Grant](https://twitter.com/danieljohngrant)

- 
