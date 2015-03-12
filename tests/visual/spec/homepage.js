casper.thenOpen('http://localhost:9000/')
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