

/*Support dropdown menu*/
$('.dropdown-toggle').dropdown();


/* Display the toop tip*/
$('.nav-tooltip').tooltip()



$('.nav-popover').popover({html : true});
$(document).ready(function(){
  $('.nav-popover').popover({ 
    html : true,
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });
});

$(document).ready(function(){
  $('.danger').popover({ 
    html : true,
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });
});

   //fold and unfold div boxes
   $(".btn-minimize").click(function(){
   		var $target = $(this).parent().parent().parent().next('.box-content');
   		
   		if($target.is(':visible')) $('i',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
		else 					   $('i',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
		
		$target.slideToggle();
   });