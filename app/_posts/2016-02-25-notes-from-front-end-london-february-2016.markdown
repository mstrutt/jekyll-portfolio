---
layout: post
title: Notes from Front-end London, February 2016
preview: My notes from Front-end London's February Event - CSS Modules, Design Sprints, and The Art of Reduxion
date: 2016-02-25 19:00:00
categories:
- notes
- fel
- css
- css modules
- react
- agile
- design
- redux
---

## CSS Modules: Who, What, Where, When, Why?! - [Christopher Pearce](https://twitter.com/chrisui)

### Who?

- [@geelen](https://twitter.com/geelen) [@markdalgleish](https://twitter.com/markdalgleish) [@sokra](https://twitter.com/sokra)

### What?

- locally scoped CSS
- only accessible by direct reference
- OOCSS and BEM feel a bit like avoiding the problem, not tackling it head-on
- CSS Modules takes your styles and creates globally unique class names for the selectors
- It's a fundamental change to the way we think about and write out styles
- It's a guarantee that the code you're writing isn't impacted by the code outside it

```
import styles from 'buttons.css'

const Button = () => ()
	<button className={styles.button} />
);
```

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
		- very easy to fix a bug or add a new feature, without worrying about external side-affects
	- Scalability
		- Infinite number of developers can work on their components without conflicts
	- Stability
		- Testing is made easier, much harder to break things

### How to stay DRY?

- There's the ability to provide defaults to be used
- You can still use your usual post-optimisation workflow after CSS Modules have run
- You can use Sass/LESS in front of CSS Modules


## Design Sprints - Making your design process agile - [Jo Franchetti](https://twitter.com/thisisjofrank)

- Often an issue with handing over designs to development
- Need a way of including design in our agile development process
- Breaking the wall
- Get more people involved in the design process
	- the more people creating ideas, the more problems you solve upfront
- Run a design sprint
	- a fast structured way of developing your ideas
	- solve one design problem
	- 5 stages (1 day each): unpack, sketch, decide, prototype, test

### Running a sprint

- Prepare
	- choose a problem
	- gather your team, including:
		- a stakeholder
		- a manager
		- a developer
		- someone who knows the users
	- clear your calendars
	- schedule your user-testing in advance
	- book a room, for the whole sprint
	- gather supplies (post-its, pens, white-board, research data)
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
	- use real copy in your prototype, not *lorem ipsum*
	- ensure the script is right for the testing, work with the person running it
- Test
	- make sure everything is all set up and ready, double check
	- you'll need a way to listen in, everyone involved in the previous steps should see it
	- you want to get ways to improve your idea, and your product as a whole
	- everyone records their opinions to compare

### What next?

- Plan them a bit ahead to be able to use the results
- You might just need to fine tune it, you may need to break it down further or test it again
- Even if they hated it, it's good to find out with only a day spent developing the prototype

### Learn from our mistakes

- Designers might resist it a bit to begin with
- Get everyone involved and
- Make sure you have a product stakeholder involved
- Hit your deadlines (don't run over on the sprint)
- Talk about your user testing results
- Double check your AV for testing (seriously)

JUST DO IT


## The Art of Reduxion - [Daniel Grant](https://twitter.com/danieljohngrant)

- Reductionism - any system can be understood by breaking it down into it's parts
- Redux: Current State + Action = New State
	- every action advances the state forward
- reducer takes a state, applies an action to it, and returns a new state
- In a nut shell
	- A change in an element triggers an action
	- This goes into the reducer with the existing state
	- The reducer returns a new state
	- The store takes this new state and updates the components
	- Components re-render if they need to

> Impressive live coding goes here...

- Store
	- takes a reducer argument
	- has a state
	- a function to dispatch actions  `state = reducer(state, action)`
	- a way to retrieve the state
	- a way to subscribe to changes in the state
		- simplistically adding each listener to the list of listeners
- Reducer
	- takes a state and an action, and returns a new state
- Actions
	- have a `type`, `value`
	- `if (action.type === 'ADD') return [...state, action.value]`
- Have some kind of component that dispatches an action when its value changes

### Connecting it to React

- there is ReactRedux, which sets up bindings between the two
- Redux can be used with anything, it's not tied to React, it's just a good match

### Thinking in Redux

- Take a look at SoundRedux
- create reducers for each different part of your state
	- use `combineReducers`
	- each one returns the slice of the state it's interested in
- State design is one of the big challenges

### Good examples

- [redux.js.org](http://redux.js.org/)
- [@dan_abramov](https://twitter.com/dan_abramov)
- [egghead.io/series/getting-started-with-redux](https://egghead.io/series/getting-started-with-redux)
- [github.com/djgrant/redux-fel-talk](https://github.com/djgrant/redux-fel-talk)
- [github.com/reactjs/redux](https://github.com/reactjs/redux)
