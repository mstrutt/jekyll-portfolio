---
layout: post
title: User agents - The good the bad and the ugly
preview: In theory user agents are great, it's a way for devices to identify themselves to servers. Great for analytics, and in theory something that can be used, along with other methods, to optimise the content the server delivers.
date: 2012-06-03 21:09:38
categories:
- user agent
---

## The Good

In theory user agents are great, it's a way for devices to identify themselves to servers. Great for analytics, and in theory something that can be used, along with other methods, to optimise the content the server delivers.

## The Bad

Sadly, user agent strings get abused. They're used as the definitive method to decide what content to send a device, usually weather to send mobile optimised content to a device or not. This is often being used in favour of feature detection - deciding how capable of viewing the website a device is. Realistically a device is the only thing capable of deciding how capable it is, and often waves of less popular, but equally (if not more) capable devices get overlooked when using user agent sniffing' this.

Take the classic iPhone web' example. When a mobile site is made, all to often it's exclusively an iPhone site. This mobile optimised content will be served based solely on the user agent string of the device, and all devices that don't identify themselves as iPhones will receive either feature-phone content or the full desktop version of a website, regardless of their capabilities and what would be optimal.

### User agents lie

> "User agents lie, on mobile, they lie twice" - [Bruce Lawson](https://twitter.com/brucel)

To get around this poorer browsing experience, a simple solution is to change the user agent of another device to identify as iPhone', and get served the mobile optimised version of the website. 99 times out of 100 this works without any problems. This really isn't difficult to do, and there are several helpful plugins that offer a range of options for a device to identify as.

### Problem solved yes? no.

The real problem with this leaving aside the fact that it's a dirty hack you shouldn't which shouldn't have to be done is analytics. Just about every site uses analytics of some kind, even if it's just tracking hits and browser / platform data. These analytics use the user agent string to identify the device accessing the site. If a device has changed it's user agent to receive optimised content, then any analytics will log it as being the device it's pretending to be. When it comes to showing which device has the greatest market share, these statistics will become increasingly misleading.

When building a new site, or section / feature, companies will look at this analytic data to decide what platforms to support, the idea is to support as many of your customers as possible wasting lots of extra cash optimising for small fractions. On desktop for example this would be Chrome, IE9, Firefox, IE8 and possibly IE7 or Safari (which tends to render just as Chrome being both webkit). When this comes to mobile, when the stats show that 80% of the mobile traffic identifies itself as iPhone, then what device would you choose optimise for?

## The Ugly

As you may have guessed, this leads to a horrible spiral, Companies optimise sites for one specific device, then a large portion of those who doesn't use it end up changing their user agent strings to identify as that device to use the mobile optimised site. Then the stats show a disproportionately large share of that device using the website compared to what it actually is. The result: a vicious circle.

## The light at the end of the tunnel

We *can* stop this. As makers of websites it is our duty to make the internet a better place, so stop user agent sniffing, use feature detection instead, it's far more reliable and can be used on the fly for any / all specific feature(s). If a browser supports the bells but not the whistles, then serve them the bells, and polyfil the whistles (if they're really that important).