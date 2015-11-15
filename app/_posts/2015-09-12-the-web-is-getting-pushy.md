---
layout: post
title: The web is getting pushy
preview: My notes from Phil Nash's talk at State of the Browser 2015
date: 2015-09-12 16:30:00
categories:
- notes
- lws
- sotb
- sotb5
- service worker
- push notifications
---

# The web is getting pushy - [Phil Nash](@philnash)

## Warning

- Live coding
- ES6
- Audience Participation

## Web vs Native

- we have
	- geolocation
	- accelerometer
	- peer-to-peer video chat
	- push notification (new)

## Notifications

- our page can live update while we're on the tab but as soon as we leave it, we lose what's going on
- notifications in all bar IE (under consideration for Edge)

- `Notification.requestPermission()`
- `if (Notification.permission === 'granted')`
- `new Notification({from, message})`

- but these go away, we lose the notifications
- Service Worker allows for offline notifications
- supported in Chrome, Firefox behind a flag, and Opera (under consideration for Edge)
- push notification Chrome, Firefox, (soon for opera), (under consideration for Edge)
- jakearchibald.github.io/isserviceworkerready


- chrome://serviceworker-internals
- notifications don't work when chrome is in full screen mode
- with great power, comes great responsibility... don't spam the user
