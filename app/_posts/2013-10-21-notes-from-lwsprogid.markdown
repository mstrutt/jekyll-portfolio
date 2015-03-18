---
layout: post
title: Notes from &#35;lwsprogid
date: 2013-10-21 22:33:17
preview: My notes on the two talks - Modern Progressive Enhancement and Online Identity.
categories:
- notes
- lws
- lwsprogid
- progressive enhancement
- paypal
---

## Modern Progressive Enhancement

- PE!=without JS
- 'user'=browser + device + human
- different experiences for different users, based on their capabilities
- features depend on 'user's
- browsers / devices / people have loads of different capabilities
- separation: core vs enhancement
	- define core functionality
	- derive core dependencies
	- compare to your target market
	- everything else is an enhancement - accept that not everyone else can experience these things
- Enhancements
	- define each enhancement
	- derive their dependencies
	- decide:
		- deliver to only enabled devices
		- polyfill / fallback
		- implement another way (cop-out)
	- first option is best for performance - purer
	- apply enhancement fully, or not at all
	- http://github.com/stucox/require-modernizr
	- lots of micro-enhancements don't need detection, usually CSS3frills
	- RWD and Mobile-First *are* Progressive Enhancement
	- graceful degradation ~ atomic enhancements
- for SEOand JavaScript as a core dependency, you can consider robot as a 'user'

## Online Identity

- Do we always want to use the same identity online?
- Authentication vs Authorisation
- 91% of users use passwords from the top 1000
- 45% of users leave instead of resetting their password
- OpenID and OAuth are a PITA
- OpenID Connect + OAuth2.0 could be the solutuion
- 66% of users think social sign-in is a desirable alternative
- 'social' vs 'concrete' Identity
- 'social' is anonymous, or who you want people to think you are
- banks &payment providers are more 'concrete'
- PayPal provide a developer API
	- login and seamless checkout.
	- can know who a user actually is.
- well used authorization can improve the user experience
- don't throw up artificial barriers just for the sake of it - login can scare people away