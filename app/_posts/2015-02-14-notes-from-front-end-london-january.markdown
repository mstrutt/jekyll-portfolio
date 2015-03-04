---
layout: post
title: Notes from Front-end London January
preview: My notes from Front-end London's January Event - OK Computer from Peter Gasston, Visual Regression Testing from Charlie Owen, and Hackers guide to testing with real users from Tom Alterman.
date: 2015-02-14 11:27:12
categories:
- notes
- fel
- speech-synthesis
- speech-recognition
- testing
- user-testing
---

## OK Computer - [Peter Gasston](https://twitter.com/@stopsatgreen)

[slides available on github](https://github.com/stopsatgreen/speech-felondon)

- 3 ways to interact with a computer
	- Touch
	- Keyboard
	- Voice
- Writing is good for recording knowledge, but voice is how we communicate
- 10% of baidu search is voice
- Synthesis - computers are going to talk back to us
	- Web speech API will allow 'SpeechSynthesisUtterance' in chrome and safari
	- Synthesis As A Service is available from several sources
	- SSML allows XML-like markup for Speech Synthesis
- Speech Recognition
	- existed before Speech Synthesis
	- Challenges
		- Multiple users
		- Multiple languages
		- Accents
	- SpeechRecognition API
	- Fun fact: https will only ask for permissions once (http asks every time)
	- Firefox proposing SpeechRTC to use the local speech recognition of the client machine in browser
	- We need to focus on the intent of what's said, not just the words
	- [http://wit.ai](http://wit.ai)
		- With [microphone.js](https://github.com/stderr/microphone.js/tree/master)
- Google have a trust, planning for if deep learning of computers ever goes wrong
- Main use cases:
	- No screen
	- Hands are busy
	- Mostly closed systems, sadly

## Visual Regression Testing - [Charlie Owen](https://twitter.com/sonniesedge)

[slides available on slideshare](http://www.slideshare.net/sonniesedge/visual-regression-testing)

- Nobody likes regression
- Unexpected bad consequences
- Basic work-flow:
	- Screenshot initial state
	- Change things
	- Screenshot current state
	- Compare them (image diff)
	- Highlighted difference
- [PhantomCSS](https://github.com/Huddle/PhantomCSS)
	- Simple [grunt task](https://github.com/chrisgladd/grunt-phantomcss) available
- [Wraith](https://github.com/BBC-News/wraith)
	- Offering available from BBC
- The work-flow is simple for small sites
- The more complex the site, the more chances of failure
	- Content
	- Interactivity
	- Dynamic features
- [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/)
	- Don't test the pages, test the components
	- Dummy content or consistent test data
- Version and update the baseline images to be used by all
- Only really effective on large projects
- Many of these systems only work in one browser, it's possible that you can introduce browsers specific regressions
- Make this part of your CI process

## Hackers guide to testing with real users - [Tom Alterman](https://twitter.com/@tomalterman)

[slides available on speakerdeck](https://speakerdeck.com/tomalterman/hackers-guide-to-user-testing)

- Why don't we user test
	- Too long
	- Too expensive
	- Too difficult
	- Not *my* job
- But we want to build good, useful things
- Hard lesson learned: don't use oracle web platform
	- After much effort social buttons were integrated
	- When tasked with sharing the link, everyone ignored the buttons and copied the URL
	- The URL was so dirty that it wasn't even tweetable
	- *Clean URLs* was in the backlog, but social buttons was prioritised over them
	- Simple user testing would have avoided this
- The process
	- Recruit
		- Use the real target audience, not mates or stakeholders
		- *Everyone* wants a £20 Amazon voucher
		- Testing remotely is easier for everyone, (possibly not as quality though)
		- Quick survey to test if a user is relevant
		- [Ethnio](http://ethn.io/)
		- Call people, check they're not weirdos or scammers
	- Plan
		- [Steve Krug - Rocket Surgery Made Easy](http://www.amazon.co.uk/gp/product/0321657292/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=0321657292&linkCode=as2&tag=ms0e-21&linkId=WCQR7ISREKLWSLDG)
		- Prepare a test script - setups for a user to complete their goal
		- Screen sharing is very important - try [GoToMeeting](http://www.gotomeeting.co.uk/)
		- Observe, don't interrupt, no leading questions
		- Some good questions are:
			- "What are you thinking?"
			- "What would you do next?"
			- "At what point would you quit?"
			- "What do you think just happened?"
	- Analise
		- Write down the most important things you noticed
		- Identify the patterns
		- Focus on behavior
		- Share the findings
		- Identify some "quick wins" / urgent issues / future considerations
- 5 users will help identify 80% of the usability issues. Minimum 3
- Share video highlights
- Helps create empathy with your users
- Test frequently, at least every month, just test whatever you have ready
- Pretend you didn't build what you ask people to test, you'll get more honest feedback
