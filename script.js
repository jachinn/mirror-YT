javascript:(function() {
	var media = document.querySelectorAll('video'); 
	Array.prototype.forEach.call(media, function(player) {
		if (player.style.transform == 'scale(-1, 1)') { 
			player.style.transform = 'scale(1)'; 
		} else { 
			player.style.transform = 'scale(-1, 1)';
		};
	});
})();
