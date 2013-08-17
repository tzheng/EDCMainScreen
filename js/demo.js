$(document).ready(function(){
	
	$("#username").focus(function() {
		$(this).parent("#input-username").addClass("input-prepend-focus");
	});
	
	$("#username").focusout(function() {
		$(this).parent("#input-username").removeClass("input-prepend-focus");
	});
	
	$("#password").focus(function() {
		$(this).parent(".input-prepend").addClass("input-prepend-focus");
	
	});
	
	$("#password").focusout(function() {
		$(this).parent(".input-prepend").removeClass("input-prepend-focus");
	});
	
	$('#register-subject').click(function(){
		$('#after-random').hide();
		$('#random-process').fadeIn('slow');
		$('#before-random').delay(2000).fadeOut(1000);
		$('#after-random').delay(3000).fadeIn(1000);
	});
	
	$('#demo-login').click(function(){
		$('#demo-logout').fadeOut(500);
		$('#demo-navi').delay(500).fadeIn(1000);
	})
	
	$('#demo-logout-btn').click(function(){
		$('#demo-navi').fadeOut(500);
		$('#demo-logout').delay(500).fadeIn(1000);
	})
});
