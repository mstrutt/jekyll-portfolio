casper.thenOpen('http://localhost:9000/')
	.then(function() {
		phantomcss.screenshot('.header', 'navigation--passive');
	})
	.then(function() {
		casper.click('#navicon');
		phantomcss.screenshot('.header', 'navigation--active');
	});