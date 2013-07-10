$(document).ready(function()
{
   //fold and unfold div boxes
   $(".btn-minimize").click(function(){
   		var $target = $(this).parent().parent().parent().next('.box-content');
   		
   		if($target.is(':visible')) $('i',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
		else 					   $('i',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
		
		$target.slideToggle();
   });
   
   
   	$('#add-regular').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a regular notice!',
			// (string | mandatory) the text inside the notification
			text: 'This will fade out after a certain amount of time.',
			// (string | optional) the image to display on the left
			//image: 'img/avatar.jpg',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: false,
			// (int | optional) the time you want it to be alive for before fading out
			time: '5000'
		});

		return false;
	});
});
