casper.thenOpen('http://mstrutt.dev/')
	.then(function() {
		phantomcss.screenshot('.header', 'navigation--passive');
	})
	.then(function() {
		casper.click('#navicon');
		phantomcss.screenshot('.header', 'navigation--active');
	});