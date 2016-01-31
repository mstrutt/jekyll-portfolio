---
layout: post
title: More old hand-written notes
preview: The last of the old notes I found from a conference long ago
date: 2016-01-31 20:38:49
categories:
- notes
- webcomponents
- regex
---

# Touch Events

- Events
	- `touchstart`
	`touchmove`
	`touchend`
	`touchcancel` (vague)
- IE does it differently
- "stick with `click`" reliable
	- really means "activate"
	- sadly slow (300ms)
	- chrome experiment (removing click delay)
- The event cascade
	- anything but tap
	- single tap
		- IE quirk with `mouseout` event
		- safari, if a content change occurs on `mouseover` or `mouseout`, the rest of the event stack is canceled
- Separate events
	- no touch-specific `focus` / `blur`
	- does every interaction class need its own set of events? "YES"
	- Microsoft suggest merging pointer and touch
	- new set of Microsoft events `-ms-touch-action: none`
- Hover
	- hover is an intent, might use later
	- event info works, but coordinates are different
	- use `changedTouches`
	- not in the MS model

## Web components can do that?

- configuring things with meaningful tags with data though attributes

```
<x-miley>
<slideshow>
	<img>
</slideshow>
```

- Polymer
- attributes customise `<select>` behaviour
- should work with other components
- change attribute callback for customer elements
- scoped styles
- new selectors to style shadow dom root ^ elem, root ^^ elems
- EVERYTHING is an element

## You don't want an object

- Object
	- messaging & late binding
	- hidden state
	- controllers should not be objects, they're stateless, no need to persist
- Having 1 user shouldn't limit us to 1 model
	- "we do lots of things they don't care about"
- most 'models' are modules
- if modular, they are easy to unit test
- objects are bad at values
- streams (like gulp) properties
- keep an eye on the goal, not what you're working with
- check your assumptions

## Bits Behind JSBin

- stream create() on JSBin
- debounced saving
	- "spike.js" send only the panel that is updated
- Phonegap JSBin app
- if (res.connection.writable === false)
- upstart to keep it running
- need to be careful with how easy it is, don't get lazy

## /Reg(exp){2}lained/

> `/^Reg(exp?|resessions)$/`

- [leaverou.github.io/regexplained](https://leaverou.github.io/regexplained/)
- matches cannot intersect
- `/a{5}/g` => "aaaaa"
- `{5,}` at least 5
- `{5,8}` 5-8 range
- `*` => `{0,}`
- `+` => `{1,}`
- `?` => `{0,1}`
- qualifiers are greedy
- `.+?` is lazy instead of greedy
- `[]` any from
- `a-z` for range
- `\w` => `[a-z0-9A-Z_]`
- `\d` => `[0-9]`
- `\s` => all whitespace
- can be used in range
- `/[^\w]` => not in range
- `\W` = `[^\w]`
- `\D` = `[^\d]`
- `\S` = `[^\s]`
- `/w(tf|ft)/` *wtf* or *wft*
- `()` grouping
- `(?:` stops it being a capture group (eg `$1` or `\1`)
- `/^$/` beginning and end of string
- `/^$/m` beginning and end of line
- `\b` => word boundary
- `/a(?=b)/` matches an a followed by a b
- `(?!` negative lookahead
- don't match for matching's sake
- `/('|").+?\1/g' matches a string, `\1` is an internal reference
- Keep It Simple Stupid
- don't be greedy
- don't forget anchors
- be as specific as possible
- use non-catching groups where possible
