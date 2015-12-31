$(document).ready(function() {
	setInterval(function() {
		$(".film-not-watched").css("border","3px solid blue");
		$(".removed-from-watchlist").parent().css("border-style","hidden");
		$(".removed-from-watchlist").css("border-style","hidden");
		$(".film-watched").css("border","3px solid green");
	 	$(".poster-container").prepend("<div class='title-div'></div>");
		$(".title-div").css({"position":"absolute", "z-index":"99", "width":"100%","background-color":"black", "opacity":".7", "color":"yellow", "margin":"auto"});
		$(".title-div").each(function(index) {
			var title = $(this).next().find("span.frame-title").text();
			$(this).text(title);
		});
	}, 1000);
});
