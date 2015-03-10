casper.thenOpen('http://mstrutt.dev/blog/2015/02/notes-from-front-end-london-january/')
	.then(function() {
		phantomcss.screenshot('html', 'blog-post--default');
	});