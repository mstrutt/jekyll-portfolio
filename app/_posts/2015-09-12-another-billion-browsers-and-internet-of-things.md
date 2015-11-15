---
layout: post
title: Another billion browsers and internet of things
preview: My notes from Martin Jakl's talk at State of the Browser 2015
date: 2015-09-12 12:00:00
categories:
- notes
- lws
- sotb
- sotb5
- internet of things
---

# Another billion browsers and internet of things - [Martin Jakl](@JaklMartin)

- there is a new generation of lower powered devices coming, they'll be connected to the internet

## Web and mobile - the next generation

- todays smart phones run a version of the desktop browser, will we make the same mistake with the next generation?
- WAP - huge investment, nobody really used it
- WAC 2.0 - was like HTML5, but not quite. HTML5 beat it to the market, nobody really used it

## The Internet of Things

- for example
	- smart sensors
	- wearables
	- connected hours
	- connected car
	- etc
- Raspberry Pi
	- Epiphany - Fast, modern browser for the Raspberry Pi
	- low powered device running the latest web tech
- Samsung Gear 2
	- runs WebKit
	- developing for it is developing WebKit widgets

### IoT issues

- ease of development
- security / privacy
- less powerful hardware

### Lets us WebKit

- advantages
	- existing dev-tools
	- community
	- known quantity
- security
	- https, TLS & SSL
- privacy
	- cookies
	- web storage
	- CORS
- memory usage
	- important not to use too much memory on low-power devices
	- need to be aware of memory usage and garbage collection
	- existing functionality to has been proven in WebKit desktop

### Going forward

- developers and designers need to consider memory optimisation for next-gen devices
- we need better memory management in WebKit

## Conclusion

Performance and hardware acceleration is not the big issue, memory usage is.
