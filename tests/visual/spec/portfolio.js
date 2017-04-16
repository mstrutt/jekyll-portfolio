casper.thenOpen('http://localhost:9000/portfolio/')
	.then(function() {
		phantomcss.screenshot('html', 'portfolio--default');
	});