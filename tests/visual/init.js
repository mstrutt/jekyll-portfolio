casper.start('http://mstrutt.dev/')
	.then(function() {
		casper.evaluate(function() {
			localStorage.clear();
		}, {});		
	});