/* global $, FastClick */
var mstrutt = {
	init: function() {
		this.touchTest();
		this.navicon();
		if (this.select.twitter.length) {
			this.twitter();
		}
		if (this.select.hideCode.length) {
			this.hideCode();
		}
		if (this.select.skillsList.length) {
			this.skillsList();
		}
		FastClick.attach(document.body);
	},
	select: {
		twitter: $('#latest-tweets'),
		hideCode: $('#hide-my-code'),
		skillsList: $('.skills-list')
	},
	touchTest: function() {
		if ("ontouchstart" in window) {
			$('html').addClass('touch');
		}
	},
	navicon: function() {
		// Toggles open class on the nav when the icon is clicked / tapped
		$('#navicon').on('click', function() {
			$(this).add($(this).siblings('.primary-nav')).toggleClass('open');
		});
	},
	twitter: function() {
		// Twitter feed
		var self = this;

		$.ajax({
			dataType: "json",
			url: "/assets/twitter/index.php?exclude_replies=true&count=10",
			success: function(data) {
				var output = '',
					count = 0;
				$.each(data, function() {
					if (count < 5) {
						output += '<li>' + this.text
							.replace(/(http(s*):\/\/(t.co\/[a-zA-z0-9]*))/g, '<a href="$1">$3</a>')
							.replace(/(@([a-z*A-Z*_*0-9*]*))/g, '<a href="http://twitter.com/$2">$1</a>')
							.replace(/#([a-zA-Z0-9\.\/-_+=?&\~\']*)/g, '<a href="http://twitter.com/search/%23$1">#$1</a>');
					}
					count++;
				});
				self.select.twitter.html(output);
			},
			error: function() {
				// On fail remove section
				self.select.twitter.add('#latest-tweets-heading').remove();
			}
		});
	},
	hideCode: function() {
		this.select.hideCode.on('click', function(e) {
			var exdate;

			e.preventDefault();

			$('.see-my-code').addClass('hidden');

			exdate = new Date();
			exdate.setDate(exdate.getDate() + 30);
			document.cookie = "code" + "=hide; expires=" + exdate.toUTCString();
		});
	},
	skillsList: function() {
		this.select.skillsList.on('click', 'li', function() {
			$(this).toggleClass('open');
		});
	}
};

$(function() {
	mstrutt.init();
});