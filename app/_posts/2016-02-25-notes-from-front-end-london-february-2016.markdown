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

- 


## The Art of Reduxion - [Daniel Grant](https://twitter.com/danieljohngrant)

- 
