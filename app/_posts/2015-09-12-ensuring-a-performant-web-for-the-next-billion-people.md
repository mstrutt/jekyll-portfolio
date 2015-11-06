---
layout: post
title: Ensuring a performant web for the next billion people
preview: My notes from Bruce Lawson's talk at State of the Browser 2015
date: 2015-09-12 14:00:00
categories:
- notes
- lws
- sotb
- sotb5
- progressive enhancement
- opera
---

# Ensuring a performant web for the next billion people - [Bruce Lawson](@brucel)

> whatsbrucewearingtoday.tumblr.com

## Where will your next customers come from?

- 4 billion people in *this circle*, expected to be 5 billion by 2050
- chances are you next customers will be from there, there are more people living there than not
- massive rates of population growth
- new people are coming online in smart phones
- regardless of the market, the top sites are the same
	- search
	- uncensored information
	- social networking
- emerging markets have the same requirement, but lower end devices
- having an accessible site can reveal markets you would never have thought of targeting

## Making the web work on lower-spec devices

- installable web apps
	- new manifest file with light metadata and icon
	- can get a full screen web experience (if your site is https)
	- appear on the homescreen, not as a browser bookmark
- responsive images
	- picture element with srcset is available
	- largely cross-browser
	- images are an increasing share of the average page weight
	- mobile data costs 10% the average wage in emerging markets (compared to 1-2% in the western market)
- opera mini
	- by rendering a page on the server, opera mini saves huge amount of data (and battery) for devices that would struggle to (or simply can't) render for themselves
	- servers *aren't* in the emerging markets they're primarily used in. Avoids adding further congestion being added to their networks. All the heavy lifting is done over fast reliable networks
	- designs won't be preserved
		- no gradients
		- less curves
		- animation only shows first frame
		- no webfonts
			- don't use icon fonts
		- Death to Icon Fonts - @ninjanails
- don't require first name and last name, some people only have the one
- be aware of cultural conventions (a name written in red can wish death)
- progressive enhancement
	- the nacrolistic beard (for the cool kids)
	- content is in the HTML
	- build up on top of it
	- still give a usable experience to older / less powerful browsers

## Rise of the smart phones

- India and China are the biggest consumers at present
- Africa and Middle East are seeing a change from feature phones to smart phones
- Increasing amount of affordable smart phones available
- Bruce's law of smartness
	- "It doesn't matter how smart your device is, if you network is dumb"
	- that said, smart devices offer the potential to take compression that little bit further (30-50% better than 90% current)
- 91.7% in 2G
- 48.3% in 3G
- Smart devices still using opera mini because of bad networks

## Opera Mini

- main focus has been on compression for the past 10 years
- for the next 10 years, focusing on compatibility
- no "high mode" which preserves full JavaScript functionality for people who want a more complete web experience
- developing countries are home to 94% of the global offline population
