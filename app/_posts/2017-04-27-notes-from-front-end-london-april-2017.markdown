---
layout: post
title: Notes from Front-end London, April 2017
preview: My notes from Front-end London's April Event - Service Workers Practically by Anna Doubková, Elm - the good, the bad & the alternatives by Jon Kelly, and The Weird World of Native Mobile by Andy Trevorah
date: 2017-04-27 19:00:00
categories:
- notes
- fel
- service worker
- elm
---

## Elm - the good, the bad & the alternatives - [Jon Kelly](http://twitter.com/jsnightowl)

- What is Elm?
	- Elm is a functional language that compiles to JS
	- Somewhat Haskell inspired
- Why Elm?
	- In how many way can JavaScript crash? (spoiler: lots)
	- One of the biggest things it's designed to address is less crashing
- The Good
	- Incredibly resilient apps
	- Declarative, readable code
		- you say *what* you want to do rather than *how*
		- Example: here's what should happen on an error, not how it should be identified/captured
	- Very fast
	- Accessible (for a strongly typed language)
	- Not built by a committee
		- Very much targeted at Front-end Devs
- The Bad
	- Not built by a committee
	- The people working on it don't always get how difficult it can be (a lot of then come from a Haskell background)
- Jargon
	- Immutability
	- Pure functions
		- 2 + 2 will always equal 4
	- Compiled code
	- Uni-directional data flow
- Part of Elm enforces handling of data you receive that doesn't match the format you expect
	- in JS your promise chain doesn't have to have a catch
	- in Elm part of defining your code includes how you handle the error
- Tasks in Elm
	- Trigger an event that doesn't happen now but happens later
	- only way to get something out (async or side effect (doesn't happen inside your program))
- Everything comes into one event loop, one at a time
	- Makes it a lot easier reason through your code

- "The happy path" - when your promise chain all correctly resolves



## Service Workers Practically - [Anna Doubková](http://twitter.com/lithinn)

- What?
	- Progressive enhancement that give you a lot of *app-like* features
		- Push notifications
		- Work offline
		- Background sync
- Example
	- You're on the tube, between stations, the next page doesn't quite load and now the old page is gone too
	- This shouldn't just happen
- Ali Baba increased profits 200% using progressive enhancement - crucial for their customer base
- Service Worker - The Middleman
	- Might seem a little bit hacky to begin with
	- Intercepts a request and can decide what to do with it. Can cache content when there is a connection and serve it as a fallback when there isn't
	- Service Worker works great with "Optimistic UI"
	- Service Worker exists in the background even after you leave the page
- How hacky is that?
	- HTTPS only (or localhost)
	- per-domain or per path - limited scope
	- Limited access, can't access the `window` or the DOM
	- Encrypt sensitive data
	- HTML5 APIs only (you can write super-moder code in them)
- The Practical Bit
	- In an AJAX app, where you would have to simply deal with a network request failing by setting some kind of offline state
	- With a service worker you can go beyond this
	- register a service worker
	- in the `install` event for service worker opens a cache and puts all the static assets in (including the html for the current page)
		- the page will now work offline
	- dynamic requests can be cached by listening to and handling `fetch` events in the service worker
	- you can't cache http images for example
	- [Example repo](http://bit.ly2pf88kn)
	- Libs
		- Redux offline
		- Logux
		- Jake Archibald's "Is Service Worker Ready"
- Pros & Cons
	- Pros
		- Create more *native-like* applications
		- They're awesome
	- Cons
		- It will never "catch up" with native
		- Browser support is pretty bad (but it is a *progressive enhancement*)
		- Bad tooling
		- Community is quite young / doesn't always agree
		- Allow you to store literally *anything* in the browser
		- The tooling for testing etc is a bit lacking
- Should you use them?
	- Yes! (if it makes sense to)



## The Weird World of Native Apps - [Andy Trevorah](http://twitter.com/trevorah)

- Native apps, it's not better, it's not worse, it's *different*
- Why native?
	- More engagement from a user if they've installed your app (correlation !== causation)
	- Push notifications improve retention (you can do this on web... or email)
	- Something something API (did you need this for your website?)
	- Users feel they are faster at getting this done (than web)
		- Yep, that's the big one
		- Leverage learned behavior. You're building on patterns the user has already learned
		- Quick to show content (running in a low-memory environment)
- Architecture
	- (Very similar to redux/flux etc)
	- CoreData
		- A wrapper around a database-like thing
		- Responds with something that updates when things change
	- Certain things get done in the background thread to avoid blocking the UI
- Weird Crap
	- Mobile Radio Eats Batteries
		- if your app uses too much battery, people will install it
		- Radio towers are far away, to reach them you need a lot of power
		- Best way to handle this is to batch up requests to allow the mobile radio to sleep
		- Mobile OS is already polling for Push but in a very smart way, you can take advantage of this
	- Segue -> "seg-way", not "seg-you"
	- Push Notifications
		- super "easy" to set up, but you need to have a way to stop them
		- Push and Notifications are two separate things
			- Try and keep the push payload as small as possible
		- Notifications are much more complicated than you think
			- Don't progressively enhance the content of the notification
	- People don't update their apps... for years
	- iOS WKWebView
		- doesn't crash on simulators, only on real devices
		- a lot of weird stuff with old devices... buy some old iPhones
	- State Restoration
		- "magic" happens to restore the state back to where the user was in the app (so long as you're using the native stuff)
		- There are callbacks for iOS/Android
	- Android Back Stack
		- Homescreen -> Gmail (inbox) -> Important inbox -> Inbox -> Open an email
			- Hitting back twice goes to the homescreen
	- Reviews
		- App reviews are important, but incredibly draining
		- Could be make or break for your app
		- Bad reviews will haunt your
		- Tally complaints to find the next thing to work on
			- Do this all at once to get it out of the way
			- Super satisfying to get this out of the way
			- You can reply to people telling them you fixed it
		- Bad reviews are better than no reviews
- Try it
