$(document).ready(function()
{

   $(".btn-minimize").click(function(){
   		var $target = $(this).parent().parent().parent().next('.box-content');
   		
   		if($target.is(':visible')) $('i',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
		else 					   $('i',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
		
		$target.slideToggle();
   });
});
