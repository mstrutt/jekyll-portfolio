casper.start('http://localhost:9000/')
	.then(function() {
		casper.evaluate(function() {
			localStorage.clear();
		}, {});		
	});