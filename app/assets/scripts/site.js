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

	function uppercaseFirstLetter (text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	function ajaxRequest (request) {
		var req = new XMLHttpRequest();

		req.onreadystatechange = function() {
			if (req.readyState === 4 && req.status === 200) {
				request.success(JSON.parse(req.responseText));
			} else if (req.readyState === 4) {
				request.error();
			}
		};

		req.open(request.method || 'GET', request.url, true);
		req.send();
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
		if (this.select.githubFeed !== null) {
			this.githubFeed();
		}
	};

	site.select = {
		twitter: document.getElementById('latest-tweets'),
		hideCode: document.getElementById('hide-my-code'),
		skillsList: document.getElementsByClassName('with-sub'),
		githubFeed: document.getElementById('github-feed')
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
		var self = this;
		ajaxRequest({
			url: '//mstrutt.co.uk:8080/tweets.json',
			success: function(tweets) {
				self.select.twitter.innerHTML = tweets
					.slice(0, 5)
					.map(function(tweet) {
						return '<li>' + tweet
							.replace(/(http(s*):\/\/(t.co\/[a-zA-z0-9]*))/g, '<a href="$1">$3</a>')
							.replace(/(@([a-z*A-Z*_*0-9*]*))/g, '<a href="http://twitter.com/$2">$1</a>')
							.replace(/#([a-zA-Z0-9\.\/-_+=?&\~\']*)/g, '<a href="http://twitter.com/search/%23$1">#$1</a>');
					})
					.join('');
			},
			error: function() {
				// On fail remove section
				self.select.twitter.className += ' is-hidden';
				document.getElementById('latest-tweets-heading').className += ' is-hidden';
			}
		});
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
		var list, i;

		function toggle () {
			toggleClass(this, 'open');
		}

		function keyToggle (e) {
			if (e.keyCode === 13 || e.keyCode === 32) {
				e.preventDefault();
				toggleClass(this, 'open');
			} else if (e.keyCode === 27) {
				e.preventDefault();
				removeClass(this, 'open');
			}
		}

		for (i = 0; i < this.select.skillsList.length; i++) {
			list = this.select.skillsList[i];
			list.style.height = list.offsetHeight + 'px';
			toggleClass(list, 'open');
			list.setAttribute('tabindex', '0');
			list.addEventListener('click', toggle);
			list.addEventListener('keydown', keyToggle);
		}
	};

	site.githubFeed = function() {
		var self = this,
			activityTitle = {
				PushEvent: function(activity) {
					return 'Pushed <strong>' + activity.payload.commits.length + ' commit' + (activity.payload.commits.length > 1 ? 's' : '') + '</strong> to';
				},
				CreateEvent: function() {
					return 'Created a new repo:';
				},
				// IssuesEvent
				// IssueCommentEvent
				PullRequestEvent: function(activity) {
					return '<strong>' + uppercaseFirstLetter(activity.payload.action) + '</strong> <a href="' + activity.payload.pull_request.html_url + '">' + activity.payload.pull_request.title + '</a> of';
				},
				generic: function(activity) {
					// return 'Worked on';
					return activity.type;
				}
			};
		ajaxRequest({
			url: 'https://api.github.com/users/mstrutt/events',
			success: function(feed) {
				self.select.githubFeed.innerHTML = feed
					.map(function(activity) {
						var item = '<li>';

						item += (activityTitle[activity.type] || activityTitle.generic)(activity);

						// Adding repo name
						item += ' <a href="' + activity.repo.url + '">' + activity.repo.name + '</a>';

						// Branch name if appropriate
						if (activity.payload.ref) {
							item += ' at <strong>' + activity.payload.ref.replace('refs/heads/', '') + '</strong>';
						}

						return item;
					})
					.join('');
			},
			error: function() {
				// On fail remove section
				self.select.githubFeed.className += ' is-hidden';
			}
		});
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