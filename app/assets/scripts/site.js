(function() {
	'use-strict';

	var site = {};

	function addClass (elm, cls) {
		elm.className += ' ' + cls;
	}

	function removeClass (elm, cls) {
		var reg = new RegExp('\\W' + cls + '\\b|\\b' + cls + '\\b\\W?');
		elm.className = elm.className.replace(reg, '');
	}

	function toggleClass (elm, cls) {
		if (elm.className.indexOf(cls) === -1) {
			addClass(elm, cls);
		} else {
			removeClass(elm, cls);
		}
	}

	site.init = function() {
		this.jsClass();
		this.touchTest();
		this.navicon();
		this.scrollTop();
		if (this.select.twitter !== null) {
			this.twitter();
		}
		if (this.select.hideCode !== null && window.localStorage && localStorage.hideCode !== "true") {
			this.hideCode();
		}
		if (this.select.skillsList.length) {
			this.skillsList();
		}
	};

	site.select = {
		twitter: document.getElementById('latest-tweets'),
		hideCode: document.getElementById('hide-my-code'),
		skillsList: document.getElementsByClassName('with-sub')
	};

	site.jsClass = function() {
		removeClass(document.documentElement, 'no-js');
		addClass(document.documentElement, 'js');
	};

	site.touchTest = function() {
		if ('ontouchstart' in window) {
			document.documentElement.className = 'touch';
		}
	};

	site.navicon = function() {
		var nav = document.getElementsByClassName('primary-nav')[0];
		// Toggles open class on the nav when the icon is clicked / tapped
		document.getElementById('navicon').addEventListener('click', function() {
			toggleClass(nav, 'open');
			toggleClass(this, ' open');
		});
	};

	site.twitter = function() {
		// Twitter feed
		var self = this,
			req = new XMLHttpRequest();

		function onSuccess (data) {
			var tweets = JSON.parse(data),
				output = '',
				i = 0;

			for (; i < tweets.length && i < 5; i++) {
				output += '<li class="tweet"><svg class="icon" height="20" width="20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use></svg>' + tweets[i]
					.replace(/(http(s*):\/\/(t.co\/[a-zA-z0-9]*))/g, '<a href="$1">$3</a>')
					.replace(/(@([a-z*A-Z*_*0-9*]*))/g, '<a href="http://twitter.com/$2">$1</a>')
					.replace(/#([a-zA-Z0-9\.\/-_+=?&\~\']*)/g, '<a href="http://twitter.com/search/%23$1">#$1</a>');
			}

			self.select.twitter.innerHTML = output;
		}

		function onError () {
			// On fail remove section
			self.select.twitter.className += ' is-hidden';
			document.getElementById('latest-tweets-heading').className += ' is-hidden';
		}

		req.onreadystatechange = function() {
			if (req.readyState === 4 && req.status === 200) {
				onSuccess(req.responseText);
			} else if (req.readyState === 4) {
				onError();
			}
		};

		req.open('GET', '//mstrutt.co.uk:8080/tweets.json', true);
		req.send();
	};

	site.hideCode = function() {
		var codeBlock = document.getElementsByClassName('see-my-code')[0];

		codeBlock.style.display = 'block';

		this.select.hideCode.addEventListener('click', function(e) {
			e.preventDefault();

			codeBlock.style.display = 'none';

			localStorage.hideCode = 'true';
		});
	};

	site.skillsList = function() {
		var list, i,
			toggle = function() {
				toggleClass(this, 'open');
			},
			keyToggle = function(e) {
				if (e.keyCode === 13 || e.keyCode === 32) {
					e.preventDefault();
					toggleClass(this, 'open');
				} else if (e.keyCode === 27) {
					e.preventDefault();
					removeClass(this, 'open');
				}
			};
		for (i = 0; i < this.select.skillsList.length; i++) {
			list = this.select.skillsList[i];
			list.style.height = list.offsetHeight + 'px';
			toggleClass(list, 'open');
			list.setAttribute('tabindex', '0');
			list.addEventListener('click', toggle);
			list.addEventListener('keydown', keyToggle);
		}
	};

	site.scrollTop = function() {
		document.getElementById('gotToTop').addEventListener('click', function(e) {
			e.preventDefault();
			window.scroll(0, 0);
		});
	};

	window.addEventListener('load', function() {
		site.init();
	});
})();