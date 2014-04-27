(function() {
	var mstrutt = {
		init: function() {
			this.touchTest();
			this.navicon();
			this.scrollTop();
			if (this.select.twitter !== null)
				this.twitter();
			if (this.select.hideCode !== null && window.localStorage && localStorage.hideCode !== "true")
				this.hideCode();
			if (this.select.skillsList.length)
				this.skillsList();
		},
		select: {
			twitter: document.getElementById('latest-tweets'),
			hideCode: document.getElementById('hide-my-code'),
			skillsList:  document.getElementsByClassName('sub-skills')
		},
		touchTest: function() {
			if ("ontouchstart" in window)
				document.documentElement.className = "touch";
		},
		navicon: function() {
			// Toggles open class on the nav when the icon is clicked / tapped
			document.getElementById('navicon').addEventListener('click', function(){
				var nav = document.getElementsByClassName('primary-nav')[0];
				
				toggleOpenClass(nav, 'open');
				toggleOpenClass(this, ' open');
			});
		},
		twitter: function() {
			// Twitter feed
			var self = this,
				req = new XMLHttpRequest();

			function onSuccess(data) {
				var tweets = JSON.parse(data),
					output = '',
					i = 0;
				
				for (; i < tweets.length && i < 5; i++) {
					output += '<li>' + tweets[i].text
						.replace(/(http(s*):\/\/(t.co\/[a-zA-z0-9]*))/g, '<a href="$1">$3</a>')
						.replace(/(@([a-z*A-Z*_*0-9*]*))/g, '<a href="http://twitter.com/$2">$1</a>')
						.replace(/#([a-zA-Z0-9\.\/-_+=?&\~\']*)/g, '<a href="http://twitter.com/search/%23$1">#$1</a>');
				}

				self.select.twitter.innerHTML = output;
			}

			function onError() {
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

			req.open("GET", "//mstrutt.co.uk:8080/tweets.json", true);
			req.send();
		},
		hideCode: function() {
			var codeBlock = document.getElementsByClassName('see-my-code')[0];
			
			codeBlock.className = codeBlock.className.replace(/\b is-hidden\b/,'');

			this.select.hideCode.addEventListener('click', function(e){
				e.preventDefault();
				
				document.getElementsByClassName('see-my-code')[0].className += ' is-hidden';

				localStorage.hideCode = "true";
			});
		},
		skillsList: function () {
			var list, i,
				toggle = function () {
					toggleOpenClass(this.getElementsByClassName('sub-skills')[0]);
				};
			for (i = 0; i < this.select.skillsList.length; i++) {
				list = this.select.skillsList[i];
				list.style.height = list.offsetHeight+"px";
				toggleOpenClass(list);

				list.parentNode.addEventListener('click', toggle);
			}
		},
		scrollTop: function () {
			document.getElementById('gotToTop').addEventListener('click', function(e){
				e.preventDefault();
				window.scroll(0,0);
			});
		}
	};

	function toggleOpenClass(elm) {
		if (elm.className.indexOf('open') === -1) {
			elm.className += ' open';
		} else {
			elm.className = elm.className.replace(/\b open\b/,'');
		}
	}

	window.addEventListener('load', function() {
		mstrutt.init();
	});
})();