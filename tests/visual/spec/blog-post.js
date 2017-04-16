casper.thenOpen('http://localhost:9000/blog/2015/03/notes-from-london-web-performance-march/')
	.then(function() {
		phantomcss.screenshot('html', 'blog-post--default');
	});