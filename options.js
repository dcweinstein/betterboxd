function save_options() {
	var watchedColor = document.getElementById('watched').value;
	var watchListColor = document.getElementById("wList").value;
	var showTitles = document.getElementById("showTitles").checked;
	chrome.storage.sync.set({
		wColor: watchedColor,
		wlColor: watchListColor,
		sTitles: showTitles
	}, function() {
		var verification = document.getElementById('verification');
		verification.textContent = 'Options Saved.';
		setTimeout(function() {
			verification.textContent = '';
		}, 750);
	});
}

function restore_options() {
	chrome.storage.sync.get({
		wColor: 'blue',
		wlColor: 'green',
		sTitles: true
	}, function(items) {
		document.getElementById('watched').value = items.wColor;
		document.getElementById('wList').value = items.wlColor;
		document.getElementById('showTitles').checked = items.sTitles;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
