$(document).ready(function(){
	$('#boxbc').hover(function() {
		$('#main,#basecamp,#basecamp-arrow').toggleClass("hidden");
	});
	$('#boxhr').hover(function() {
		$('#main,#highrise,#highrise-arrow').toggleClass("hidden");
	});
	$('#boxcf').hover(function() {
		$('#main,#campfire, #campfire-arrow').toggleClass("hidden");
	});
});