---
layout: post
title: Notes from State of the Browser (#SOTB4)
preview: My notes from London Web Standards' 2014 Conference - State of the Browser
date: 2014-04-26 10:00:00
categories:
- notes
- lws
- sotb4
---

## Firefox OS: not only promises - [Fernando Campo](https://twitter.com/ferkhamp) and [Borja Salguero](https://twitter.com/borjasalguero)

[Slides on slides.com](http://slides.com/fercampo/not-only-promises/)

- Telefónica going from their old OS to Firefox OS: harder, better, faster, stronger
- Firefox OS simulator available in Firefox Nightly
- [perf-o-matic](http://datazilla.mozilla.org)
- [Project Eideticker](http://wiki.mozilla.org/Project_Eideticker) measures perceived rendering performance
- FirefoxOS *is* a browser
	- everything we do to develop it is developing the web
	- Theoretical discussions become much more real
	- Live feedback from users *and* developers
- Updates to Firefox OS
	- Updating an old FirefoxOS device to 2.x of improves the performance
	- Making the device APIs more accessible and requires less privileges in newer releases
	- The goal: your whole device will be a browser, not just a thing that you can install apps on.
	- FirefoxAccounts - provides access to all Mozilla services
		- Can communicate seamlessly between Firefox devices, for free!
	- New all-in-one developer tools: Mulet
	- Better documentation
		- Lots of open documentation on [MDN](https://developer.mozilla.org/en-US/)
		- [FirefoxOS Educational GitHub](https://github.com/firefoxosedu) with examples for all features
- Ultimate goal: a very affordable device with all of the power of the web

## Intro to @viewport & other new Responsive Web Design CSS features - [Andreas Bovens](https://twitter.com/andreasbovens)

[view presentation on slideshare](http://www.slideshare.net/andreasbovens/presentation-sotb2014)

- New from Opera
	- Opera for Android now has a tablet release using Blink
	- Opera for iOS has begun
	- Opera Max for Android is like a VPN Tunnel to compress your data received. Speeding things up without killing your data plan
- Powering RWD: media queries & meta viewport
- Viewport
	- to the rescue - letting browsers know not to apply a legacy design (width=device-width)
	- BUT it's not a real standard
		- eg: The scaling bug that "forced" people to disabled zoom
		- One person gets the syntax wrong on stack-overflow and suddenly half the web is!
		- Lots of edge-cases are not well documented
		- Browsers have some weird quirks on their implementation
- Why not make a CSS spec for Viewport? Layout belongs in CSS
	- `@viewport { width: auto; }`
	- `@viewport { width: 400px auto; }` is like `min-width: 400px;`
	- Soon `orientation: landscape;`
- Viewport CSS is behind flags in Chrome and Opera
- Resolution media queries
	- That's right, not *just* iOS retina!
	- The array of different dpi screens makes for blurry looking images
	- Resolution media queries *can* use "dots per 'px'" units
	- `@media (screen and min-resolution: 2dppx) {`
	- very similar to `device-pixel-ratio` except it's standardised
- Object fit and object position
	- `img { object-fit: contain; }`
	- `object-position`
	- Allows you to produce adjustments to an image with scaling
	- There is a bit of overlap with responsive images, but best practice will emerge with time
	- Don't have to use background-image for smart images anymore, putting images back in `<img>`
- Viewport percentage units
	- `vw, vh, vmax, vmin`
	- Viewport-relative lengths 

## Browsers at play - [Ruth John](https://twitter.com/rumyra)

All demos available on [dancing.rumyra.com](http://dancing.rumyra.com)

- VJing - creating the visuals to go along with music
- Pretty great support for CSS animations now
- Things you can do with the web
	- Control volume
	- Create filters
	- Create sound
	- Analyse sound
- Although we can't use a direct sound file or line in, we can get microphone from the Web Audio API
	- Not bad support for `getUserMedia`
- [http://dancing.rumyra.com/shake-n-track](http://dancing.rumyra.com/shake-n-track)
- [http://dancing.rumyra.com/vibrate](http://dancing.rumyra.com/vibrate)
- Mixing He-man with Thundercats
- Voice API gives us Speech Recognition and Speech Synthesis
	- Not very well supported (lots of Skeletor)
- Gamepad API lets you control your browser using a Gamepad

## Network connectivity: optional - [Jake Archibald](https://twitter.com/jaffathecake)

[Slides on speakerdeck](https://speakerdeck.com/jaffathecake/the-web-the-bird-at-the-zoo)

- Take a look at your phone's home screen, ask yourself why you can't use the browser for that?
	- Push notifications
	- New content even while offline
	- Syncing in the background later
	- Performance
- `.requestAutocomplete` to make web forms much easier
- We've dropped the 300ms tap-delay! :D ([FastClick](https://github.com/ftlabs/fastclick) for browsers that haven't)
- A lot of the features we need require running code either in the background or before the page loads
- ServiceWorker
	- It's is on the way!
	- "[AppCache] is a big ugly goon and I want to squash his face"
	- ServiceWorker give us back control of caching resources and requests for offline
	- Nice async handling with Promises
- Offline First - the next level of progressive enhancement, treating a persistent connection as an enhancement
- There are already specifications for Background Synchronization and Push
- Contribute to [ServiceWorker on GitHub](https://github.com/slightlyoff/ServiceWorker)

## High-performance web platform - [Martin Beeby](https://twitter.com/thebeebs)

[Presentation on PowerPoint Online](http://bit.ly/perfSOTB)

- Demos on [@tobint's website](http://tobint.com/)
- Bandwidth isn't the performance issue, latency is
- Perceived performance
	- Paint early and give at least *some* interaction
- Performance improvement areas you might not have thought of
	- Memory efficiency
	- Power consumption
	- We need to consider these more
- [status.modern.ie](http://status.modern.ie)
- New Developer Tools
	- UI Responsiveness (under F12)
	- Windows Performance Toolkit
- Average payload has 55 images, often not correctly sized
- [http://physicsoffast.io/demos/](http://physicsoffast.io/demos/)
- Defer *ALL THE SCRIPTS*
- Reduce number of frameworks - know what ones you have and be carefully selective about them
- Any changes shouldn't be tied to the event firing, but instead to the refresh rate of the screen. Using `requestAnimationFrame` to do the pain instead of with the scroll / gesture
- Smoothing with CSS animation instead of JavaScript can have some key performance benefits
- Use .jpeg over .png
	- Memory management tool (under F12)
		- compare different snapshots of states of your website for memory efficiency
	- jpeg can be a lot more memory efficient than png
	- Memory usage for an image is typically height * width * 4
	- The memory has to be copied from the CPU to the GPU, that can cause a long latency
- When developing, always think about low end devices first

## Brace yourselves: responsive images are coming - [Yoav Weiss](https://twitter.com/yoavweiss)

[Slides available on GitHub.io](http://yoavweiss.github.io/respimg-sotb-presentation/#/)

- srcset has been implemented, picture element is coming
- [IndieGoGo campaign for implementing the picture element](https://www.indiegogo.com/projects/picture-element-implementation-in-blink#home)
- A lot of argument over the best solution for responsive images
- Responsive Images Community Group was born
- Picture vs srcset
- srcset got implemented and now we are working on Picture
- Picture 2.0
	- load high-res images *only* on high-res devices
	- `srcset="image.jpg 1x, image-2x.jpg 2x" both on `img` and `picture > source`
	- Use-cases for picture
		- Primary: art-direction
		- Secondary: MIME type fallback
	- Sizes + srcset 'w' descriptor
		- images that aren't fixed width but have a variable width
		- tells the browser what size the image will be at different breakpoints
		- all the logic is offloaded to the browser
- Firefox are actively implementing the picture element with srcset
- Blink (Chrome & Opera) srcset is implemented, picture is in active development
- Internet Explorer showing interest in the picture element
- WebKit partial srcset implementation, likely they will end up implementing it
- Caveats
	- be careful of Intrinsic sizing, if you don't set the size, it will calculate by dividing by the pixel-density
	- Using `@viewport` should be inlined with a `<style>` tag so the browser can get the right image as soon as possible without wasting time or bandwidth
	- don't mix 'x' and 'w'
	- If you have 'w' present then 'src' will not be considered as an image candidate
	- The old 'w' syntax is very similar, but very different
	- "Picture is a magical span, nothing more" - Tab Atkins - style it like a span around your image tag
- Picturefill is the official polyfill - there is a 2.0b release
- Feature detection
	- `HTMLImageElement.sizes` & `HTMLImageElement`

## What it means to be flexible? - [Dan Donald](https://twitter.com/hereinthehive)

- [Break The Page](http://breakthepage.com)
- RWD - It's open to interpretation
- Breakpoints help us to describe change
- Are we designing for content or devices?
- Just because your designs are aimed at these 'lines-in-the-sand' it doesn't mean that *everything* has to change there
- Content-oriented breakpoints - neither right or wrong, just choices
- It's not the code that's important, but understanding the choices we have
- Mobile first is important, but that's not the same as saying narrow view-port is a mobile, and you shouldn't assume that it is
- It's not "*How* do you" but "*Why* do you *need to* know what the device is?"
- We work in a world of assumptions
	- Does mobile mean just the device, or an assumption about the way it is used?
- What can this device and / or browser do? - When do we know it?
- Element queries
	- What can my containing element do?
	- [kippt.com/hereinthehive/element-query-resources](http://kippt.com/hereinthehive/element-query-resources)
	- Some good positives, but also lots of negatives
	- Where needed we should give it a play, try and use it now and try and work towards an end solution
	- [Some of the JavaScript is available on GitHub](https://github.com/hereinthehive/responsive-modules)
- Question your defaults, don't just do what you've always done, always think what's best for the situation

## Open web apps: going beyond the desktop - [Chris Heilmann](https://twitter.com/codepo8)

- We are coming together now - Browser opinions are complimenting each other instead of arguing
- Open Web Apps - a manifest file what says "this site is an app"
- What makes a good app?
	- focused: fullscreen with a simple interface
	- mobile: works offline
	- contained: deleting the icon deletes the app
	- integrates: works well with OS and has hardware access
	- responsive and faster: runs smooth, can be killed
	- **summary**: do one thing, and one thing well
- Can we make "apps" with HTML5 and the open web?
- The menu is never about the needs of the end user, but about the hierarchy of the company
- App Types
	- Web content - no special permissions
	- Installed Web App - Asks for everything you can get with a one time request to the browser
	- Privileged Web App - Access to extra device capabilities a browser doesn't have
	- Certified Web App - certified by one of the vendors
- While 60FPS is important, there are a lot of things that happen before that
- Go as low as you can when testing, slow things right down
- We're here today because of the open web. You made your first page for free, and put it somewhere for free

## Discussion panel - Moderated by [Daniel Appelquist](https://twitter.com/torgo)

### Thoughts on http2 / spdy

- *best* practices will become *bad* practices
	- don't combine everything into one file, let them cache it in fragments
	- sprite-ing will no longer be the best practice, send what you need, when you need
	- splitting up the resources will allow splitting up the parsing
- Will be a lot of new security with the web enforcing https
- Most of us use a build process as it is, hopefully it will be simple enough to change just that process when we move towards http2

### How can we create a web industry where women don't feel alienated?

- [Martin](https://twitter.com/thebeebs): "I try not to be a dick"
- Social perception is not necessarily about gender, it's about discrimination, we need to re-evaluate the social perception
- Change the environment around you, don't fuel the social click-bait - it doesn't help
- The Science of Sexism - podcast by the royal institute

###"The Web Platform" - what *is* the platform, and why would we want the web to be one?

- A platform is an opportunity to share something with the world
- The idea of making the web a software platform is something we've been doing for a while now - [Chris](https://twitter.com/codepo8)
- "Platform" is just a matter of naming, not long ago we were saying "web standards" or "web stack" or use "HTML5" to encompass everything - [Andreas](https://twitter.com/andreasbovens)
- It's a word we use for this "thing" we share between a lot of different companies - [Borja](https://twitter.com/borjasalguero)

### WebGL and how can we make the web more open for game developers

- The web wasn't necessarily built as a platform for gaming, use something for not quite what it was intended for and maybe *then* we'll see these things developing
- There is a lot of interest from game developers in WebGL, but it will be a long while before gaming on the web is "serious"
- As a web developer, we don't really understand the world of game developers
- They are two different worlds really, people have their own tool sets and they use them. That's why some of the earlier unreal engines were ported to HTML5
- Interestingly WebGL gave us faster canvas an pixel manipulation. Gaming is almost the benchmark and speed test of the web

### How will webcomponents change the way we make apps

- [Chris](https://twitter.com/codepo8): Webcomponents are an amazing opportunity to write proper widgets for the web.
	- Whatever element you were missing, you can write, and publish
	- You become part of the browser
	- But you will have the danger of lots of variations of the same thing
	- "It's very simple to build a widget, but very hard to build a *good* widget"
- Webcomponents will do away with JavaScript UI component-libraries such as jQuery UI
- As a developer, you will no longer be second class to how the webpage works
- [Yoav](https://twitter.com/yoavweiss): concerned about the render-blocking implications of the HTML imports

### What's the future state of deep-linking from / to web apps on a mobile device

- The flow from app to app feels very familiar 
- We can't lose access to the URL - stop putting words in [Jake](https://twitter.com/jaffathecake)'s mouth!
- What we're doing now is only the very first step
- [Andreas](https://twitter.com/andreasbovens): We need to make sure that if we can turn the web into an app, we can still turn an app back into the web
- [Jake](https://twitter.com/jaffathecake): We don't want to ask for access to all features upfront but keep the web's model of asking for the permission the first time you need it - it also gives the action context

### Can you discuss the security implications around service worker

- [Jake](https://twitter.com/jaffathecake)
	- Yes, you can hijack a request, which sounds scary, but the only person you can shoot in the foot, is yourself
	- ServiceWorker will only work over https, because of the amount of power it has
	- You can already register a service worker with the browser... and then you can unregister it
