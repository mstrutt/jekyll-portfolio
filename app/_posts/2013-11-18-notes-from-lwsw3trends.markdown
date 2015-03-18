---
layout: post
title: Notes from &#35;lwsw3trends
preview: My notes from the two talks at London Web Standards November - Firefox OS in a nutshell, by Fernando Campo and Borja Salguero; What's new in Web Standards by Daniel Appelquist.
date: 2013-11-18 22:26:49
categories:
- notes
- lws
- lwsw3trends
- firefox
- webapps
---

## Firefox OS in a nutshell [@ferkhamp](https://twitter.com/ferkhamp) [@borjasalguero](https://twitter.com/borjasalguero)

- Make something affordable for everyone
- "Will Firefox OS change the app's history?"
- Open source OS using web technologies, bringing the web to everyone using a low end smartphone
- Basic needs of an app
	- A web app
	- A manifest (json)
- Hosted vs packaged
	- Hosted - Remote with a local manifest, limited api
		- Signed by app store but not reviewed
	- Packaged is bundled with all resources
		- Options for more levels of API: hosted, privileged, certified
		- Approved by app store
		- Tight CSP (no inline scripts)
	- Privileged
		- Approved by vendor
		- Access to all APIs
		- Loosened CSP
- All controlled my manifest
- Simple API for hosted apps for things like battery level including simple event listeners, just call the object
- Option to interact with other apps if you don't want to build the functionality yourself (like web intents)
- User REM to get mm from pixels
- [http://buildingfirefoxos.com](http://buildingfirefoxos.com)
- Lots of debugging tools on the device, including repaint highlighting and load timers
- Shared CSS libraries you can use for a consistent look and feel, as well as easier development
- Debug using Firefox's web inspector
- You can modify all the html and CSS of your firefox OS homescreen

## What's new in Web Standards [@torgo](https://twitter.com/torgo)

- The web is evolving
- Web is almost a majority mobile platform
- WebRTC
	- Real Time Communication
	- "Skype in your browser"
- DRM - a big talking point right now
	- "If there's DRM on the internet anyway, why not have it in a standards way"
- System Application API (similar considerations as for Firefox OS)
- New: Web and Mobile Interest Group - taking forward the work of CoreMob
	- Goal is to make the web the goto platform of choice for cross-platform mobile development
- Future of Installable Webapps
	- Installing a webapp on Firefox OS and Tizen from one manifest file
	- Install the existing app experience to the homescreen instead of piping out to a different experience
- Push API
	- Push notifications for web apps
- Advances in Offline Service Worker
	- People don't like Appcache
	- An architecture to support offline webapps
- Web Payments
	- "We're working on it"
	- Open discussion soon
- Securing the Internet / Web
	- "Post-Snowden"
	- Lots of energy in IETF (https2)
- HTTP 2.0
- Get Involved!