casper.thenOpen('http://mstrutt.dev/')
	.then(function() {
		phantomcss.screenshot('html', 'homepage--default');
	})
	.then(function() {
		casper.click('#hide-my-code');
		phantomcss.screenshot('html', 'homepage--code-hidden');
	})
	.then(function() {
		casper.click('.with-sub');
		phantomcss.screenshot('.skills-list', 'homepage--skills-open');
	});