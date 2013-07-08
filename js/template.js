

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