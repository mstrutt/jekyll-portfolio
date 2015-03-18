---
layout: post
title: Notes from &#35;lwshttp
preview: My notes from London Web Standards March Event &#35;lwshttp - Playlister&#58; Developing a new music product at the BBC by Sara Gonzalo, and What to expect from HTTP/2 from Mark Nottingham.
date: 2014-03-17 21:30:38
categories:
- notes
- lws
- lwshttp
- http2
---

## Playlister - Developing a new music product at the BBC - [Sara Gonzalo](http://twitter.com/sara_SGM)

- Why? People searching for 'that some that was on last week'
- [@bbcplaylister](http://twitter.com/bbcplaylister)
- So many track IDs, lets use our own
- Developing the new API using the docs from the old one
- Nobody knows what 'export' means, they just want to 'listen'

## What to expect from HTTP/2 - [Mark Nottingham](http://twitter.com/mnot)

- Performance = Attention = £££
- There are a lot of techniques people use today to get the most out of http performance - today
	- Sprites
	- Sharding (multiple hosts)
	- Concatenation
- All these techniques are hacks
- Recurring theme is "Eliminate Requests"
- Why are HTTP requests so expensive?
	- HTTP/1 uses TCP poorly
	- HTTP Headers are quite verbose - a lot of duplication between header requests
- What HTTP/2?
	- It started with [SPDY](http://www.chromium.org/spdy) (speedy)
	- Separate the semantics of the protocol from the framing
	- Full multiplexing of headers and data, back and forth, within a stream
	- Header Compression
		- Gzip was [stopped by CRIME](https://www.alertlogic.com/crime-deflate-token-bruteforce/)
		- [HPACK](http://http2.github.io/http2-spec/compression.html): Safe, Smart Header Compression
	- Server Push - optimistically sending what data the server thinks the client will need next (CSS straight after HTML)
- Spec should be done by the end of the year
- Working draft of HTTP/2 is implemented on the twitter servers now
- HTTP semantics won't change... But, leaked abstractions will.
- Rethink things
	- Load balancing
	- Fallovers
- Use TLS. Firefox and Chrome will require it
- Requests will be cheaper
- Getting from 1 to 2
	- https: ALPN
	- http: Inband upgrade 'dance', hint that HTTP/2 is available on another port
- [http://http2.github.io](http://http2.github.io)
- [@http_2](http://twitter.com/http_2)
