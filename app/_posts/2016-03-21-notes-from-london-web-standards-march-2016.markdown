---
layout: post
title: Notes from London Web Standards, March 2016
preview: My notes from London Web Standards' March Event - Chrome Debug Tools by Katie Fenn, and Using WebPageTest by Andy Davies
date: 2016-03-21 19:00:00
categories:
- notes
- lws
- chrome
- debug
- performance
- webperf
---

## Chrome Debug Tools - [Katie Fenn](https://twitter.com/katie_fenn)

> [tiny.cc/kf-fel-2015](http://tiny.cc/kf-fel-2015)
> [tiny.cc/kf-fel-2015-videos](http://tiny.cc/kf-fel-2015-videos)
> Add Osmani Totally Tooling ____ on medium

- Debugging - monitoring application low & state
- The Elements Tab
	- Right Click "Inspect Element", `F12`, `Ctrl` (`Cmd`) + `Shift` + `C`
	- Update/toggle CSS properties in real time
	- Can pin states like *hover* or *focus* while debugging
	- Can slow down or even pause CSS animations
	- *Computed* tab provides a visulisation of the box model
	- Lists all CSS properties applied to an element
- The Network Tab
	- Shows all requests the page is making
	- Includes method / responses / types of request / sizes / timing
	- visualisation or request *waterfall*
		- thin part is before the request
		- thicker part is sending / receiving data
	- Filter by request type (XHR for Ajax)
	- Summary of page timings and size at the bottom
	- Throttling feature allows you to simulate poor connections
	- *camera icon* records frames to see what the page looks like at different points in the page load
- Sources Tab
	- For script debugging
	- Try using `debugger;` instead of `console.log(foo);`
		- provides a breakpoint to see what's the values of different variables are at that point
		- call stack shows functions that have been called up until that point
		- *Watch expressions* let you see the output of certain important values
		- You can add a condition to breakpoints so they only pause when the condition is met
	- Buttons
		- resume script execution - unpause from a breakpoint
		- setp over - executes the next line, then pauses
		- step into - pauses on the first line of the next function
		- step out of current function - return to point current function was called
	- Snippets
		- little bits of code you use while debugging
		- eg
			- A script to set values for logging on the user
		- the are saved for next time use user the browser
	- Can add a workspace to map website files to files on your local maching
		- Persist changes to local files
	- Quick open & Pretty print
		- find a file and help to *unminify* production code
	- Blackbox a third-party library to ignore its execution (angular, jQuery etc)
- Timeline
	- red button to record
	- get a graph of animation frames and how long they took to render
		- the higher, the longer the render took
		- broken down by what caused it - colour-coded
		- top line is for 30fps
		- lower line is for 60fps
	- Pain profiled and frame viewer for more in-depth debugging
- Profiles
	- Can profile CPU for excess work
	- Sort by total to see what's taking up the most time
- Can theme chrome dev tools
- Can get plugins for your favourite JS frameworks
- Other dev tools
	- Firefox (native)
	- Firebug
	- Latest IE Dev Tools
	- Remote debugging for mobile (Android in chrome, iOS in Safari)

## Using WebPageTest - [Andy Davies](https://twitter.com/AndyDavies)

> [webpagetest.org](http://webpagetest.org)

- O'REILLY book - [Using WebPageTest](http://www.amazon.co.uk/gp/product/1491902590/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=1491902590&linkCode=as2&tag=ms0e-21)
- How it works (simplified)
	- Every browser use has been hacked for monitoring
	- Mobiles will have been unlocked / jailbroken
- Go to settings
	- pick an odd number of tests to run
	- You can control what network connection to use
	- Advanced
		- Make tests run longer
		- Capture SSL Certs
		- Inject custom headers (eg. Akamai Debug)
	- Chrome only
		- emulate mobile
			- Good for a quick check, not deep testing
		- capture remote debugging info
		- download the chrome timeline to view in devtools
		- can download a netlog for use with *Chrome net internals*, showing all the events that happened when loading
		- use Chrome network reduction settings for Android
- You get
	- Waterfall (very similar to dev tools)
	- Summary
	- Some screen shots
- The more vertical the waterfall, the better. If it's more horizontal you have issues
- The second load (using cache) should be a lot better, hopefully not much fetched fresh at all
- Can use webpage test to simulate blocking a third party
	- points it to somewhere that never answers (*blackhole.webpagetest.org*)
	- can see the impact and risks of it happening
- "Love them or hate them, third parties are part of our web"
- Domains tab can show number of requests by domain
- Can run a bunch of different scripted tests, with history
- Blocking domains in WebPageTest using an extension for chrome, try it in Firefox as it blocks at network level
- Scripting
	- Uses its own scripting language
	- Can get a waterfall for just the result set you want
	- Can use ids as hooks for actions
	- Can write JavaScript to execute as part of tests
	- Location tested from might impact the content of the page that is loaded
	- Can use jQuery for scripts if it's on the page
	- Debugging scripts can be hard - commands may be issues too quickly for the page to keep up
	- `execAndWait` instead of just `exec`
- Authentication
	- Can set headers for basic auth
	- Can script filling in a form
	- Can set cookie values
- Works in a large number of public locations
- Can access results via an API
- Sometimes you just want a quick and easy bulk test - how about a spreadsheet
- You can run a private instance of WebPageTest for local testing or for integration into your CI process
	- You can do remote testing from a local instance, all the results will be stored locally
