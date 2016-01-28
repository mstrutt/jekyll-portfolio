---
layout: post
title: Notes from Front-end London, January 2016
preview: My notes from Front-end London's January Event - Taking Part in the IndieWeb by Calum Ryan, The Miracle of Generators by Bodil Stokke, and How to not use jQuery by Callum MacRae
date: 2016-01-28 19:00:00
categories:
- notes
- fel
- indieweb
- es6
- generators
- jquery
- vanillajs
---

## Taking part in the IndieWeb - [Calum Ryan](http://twitter.com/calum_ryan)

- back in the late 90s
	- things like geocities were the best free way to put content onto the internet
	- lovely things like
		- marques
		- the time
		- a ring of links to other sites
		- "beautiful" images
- then things like myspace
	- Tom was everyone's friend
	- One page for everything you wanted to put up
	- A good learning ground for some basic HTML/CSS
- about 2005
	- putting our content into hosting arrangements where you don't actually own the space
	- mega silos
		- pretty much anybody with a login could access your content
		- the content host claims ownership of your content
		- nothing you can do if they go down, content is just lost
- why do people use these thing?
	- free
	- very simple interface to make it accessible
- declining interest in having your own website
	- other things are just easier
- interconnectivity
- enter [IndieWebCamp](http://indiewebcamp.com)
	- working on an open source platform, a wiki for how to keep your data a bit safer
	- better solutions to publish content and host your own data
	- IndieWebCamp != ind.ie
- key goals for IndieWebCamp
	- your content is *yours* - when you post something on the web, it should be yours
	- be better connected - should go to all services (that you want)
	- content is hosted by you, then linked to on the favorite silo of the day
	- *you* are in control - post how, and when, you want, links are permanent
- [IndieWebify.Me](http://indiewebify.me) - how indie web is your website?
- how do I Indie Web?
	- get a domain
	- choose your hosting
		- advise paid-for
		- GitHub pages is a good free option
		- [Known](https://withknown.com) - free with some paid features (or host yourself)
	- identify who you are (`rel="me"` attribute on social links)
		- microformats for articles, people, places
	- POSSE (Post on your Own Site first, then Syndicate Elsewhere)
	- @webmentions
		- notify another URL when you link to it on your site (superseded pingback)
		- `rel="webmention"` `source="my-website-page"` `target="their-website-page"`
		- first W3C working draft 12th Jan
- Bridgy
- build a better experience than the silos
- one example: using [twillio API] to text content to your website, then syndicated to twitter
- come along to IndieWebCamp camps or fortnightly events
- get involved!


## <del>The Miracle of Generators</del> Generators are dashed jolly spiffy - [Bodil Stokke](http://twitter.com/bodil)

[slides available on bodil.lol](http://bodil.lol/generators)

- iterators
	- for going over a collection, instead of strictly arrays
	- `i = ponises.values(); i.next(); {"value: "next value", "done": true/false}`
	- `for (let i of ponies)`
- symbols

```
ponies = {
	[Symbol.iterator]: () => {
		let c = 0;
		return {
			next: () => {
				c += 1;
				if (c === 1) return {value: "foo", done: false};
				else if (c === 2) return {value: "bar", done: false};
				return {done: true};
			}
		};
	}
};
```

- you can do nice things like an infinity iterator, a counter that counts forever (you don't need a fixed array)
	- lazy loading array as values are only evaluated when `.next()` is called
- can wrap an iterator around an iterator
- can change the order or wrapping without issue, end up like a lazy sequence library
- end up quite like closure

### Generator
	
```
infinity = function*() {
	let c = 0;
	white (true) {
		yield c++;
	}
}
```

- function will pause at execution of `yield` until the `.next()` is called again
- will end up with infinite potential to as many as you need without the worry of an infinite loop

``` 
fiveup = function*() P
	let c = 0;
	while (true) {
		c = yield c;
		c = c + 5;
	}
};

i = fiveup();
i.next() // 0
i.next() // 5
i.next(20) // 25
```

### Promises with generators

```
unit = v => new Promise((res) => res(v));

promises = function*() {
	console.log(yield unit('omg'));
	console.log(yield unit('wtf'));
	console.log(yield unit('bbq'));
}

// iterate over a series of resolved promises
run = (iter, val = null)) => {
	const next = iter.next(val);
	if (!next.done) {
		next.value.then(result => run(iter, result));
	}
};

```

- you can write synchronous looking code to do decidedly async things
- returning from a generator gives a value with the final `{done: true}`

```
fetchText = function*(url) {
	return yield (yield fetch(url)).text();
}
```

```
// Type checking for JS

maybe = (val) => ({
	then: (fn) => val != null ? fn(val) : null;
});

prop = (key, obj) => maybe(obj[key]);

things = function*() {
	const dash = yield prop('dash', ponies);
	const pie = yield pprop('pie', ponies);
	return dash + 'is friends with' + pie;
}
```

- `yield` can hide away the promise `.then` chains and just deal with values
- this is a Monad (kind of like a cute puppy in a burrito)
- Promises are totally Monads

## How to not use jQuery - [Callum Macrae](https://twitter.com/callumacrae)

- jQuery, 2005 (11 years ago)
- `var` is function-scoped, `let` is block-scoped

```
function foo ({name, colour}) {
	console.log(name + ' likes ' + colour);
}
foo({name: 'Callum', colour: 'orange'});
```

```
// jQuery
$('.selector')

// Vanilla
let users = document.querySelectorAll('.selector')
for (let user of users) {
	...
}
```

```
$user.next()
user.nextElementSibling / previousElementSibling / parentElementSibling
```

```
$user.attr('aria-live')
user.getAttribute('aria-live')
```

```
$user.html()
user.innerHtml

$user.text()
user.textContent // not innerText

$('.input').val()
document.querySelector('.input').value
```

```
$user.toggleClass('foo')
user.classList.toggle('foo')
```

```
$user.css('background-color', '#000')
user.style.backgroundColor = '#000'

$user.css('background-color')
getComputedStyle(user).backgroundColor
```

```
$(document).on('click', '.user', function() {
	...
})
document.addEventListener('click', function(e) {
	if (e.target.matches('.user')) {
		...
	}
})
```

```
$.ajax(...
fetch(...
```

```
$.each
Array.prototype.forEach
// plus lots of other options
```

```
$.parseJSON(data)
JSON.parse(data)
```

```
options = $.extend({
	foo: 'bar'
}, options)

object.assign({
	foo: 'bar'
}, options)
```

- jQuery animations vs CSS transitions and requestAnimationFrame
- A lot of this isn't in browser yet, as it's ES6
	- check out Babel

### But when *would* you want to use jQuery?

- Old IE, IE8 pretty much requires it
- checkout [caniuse.com](http://caniuse.com) and plug in your analytics data to see what your user-base supports
- low barrier to entry, juniors and backend devs can write it easily
- there are a LOT of libraries for it, often the ones you want depend on it
- 110 browser quirks fixed by jQuery in modern browsers

### More ES6

- ES6 Classes, syntax sugar around what we've got already
- ES2015? because they'll be doing smaller, yearly releases of JS
- ES2016 will be coming soon...

### Summary

- Everything jQuery does, can be done without it
- it can make your life a lot easier though
- [Babel](https://babeljs.io/) adds less bytes than jQuery
- [jNearly](https://www.npmjs.com/package/jnearly), coming to a browser near you