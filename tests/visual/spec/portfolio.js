casper.thenOpen('http://mstrutt.dev/portfolio/')
	.then(function() {
		phantomcss.screenshot('html', 'portfolio--default');
	});