$(document).ready(function() {
	setInterval(function() {
		chrome.storage.sync.get(null, function(items) {
			var watchedColor = items.wColor;
			var watchListColor = items.wlColor;
			var showTitles = items.sTitles;

			if(watchedColor != "disable") {
				$(".film-not-watched").css("border","3px solid " + watchedColor);
				if(window.location.href.substring(0, 26) == 'http://letterboxd.com/film') {
					$(".film-not-watched").css("width","224px");
				}
			}
			else {
				$(".film-not-watched").css("border-style", "hidden");
			}
			$(".removed-from-watchlist").parent().css("border-style","hidden");
			$(".removed-from-watchlist").css("border-style","hidden");
			if(watchListColor != "disable") {
				$(".film-watched").css("border","3px solid " + watchListColor);
				if(window.location.href.substring(0, 26) == 'http://letterboxd.com/film') {
					$(".film-watched").css("width","224px");
				}
			}
			else {
				$(".film-watched").css("border-style","hidden");
			}
			$(".poster-container").prepend("<div class='title-div'></div>");
			if(showTitles) {
				$(".title-div").css("display","block");
				$(".title-div").css({"position":"absolute", "z-index":"99", "width":"100%","background-color":"black", "opacity":".7", "color":"yellow", "margin":"auto"});
				$(".title-div").each(function(index) {
					var title = $(this).next().find("span.frame-title").text();
					$(this).text(title);
				});
			}
			else {
				$(".title-div").css("display","none");
			}

		});
	}, 1000);
});
