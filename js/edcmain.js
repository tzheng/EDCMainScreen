$(document).ready(function()
{
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
			time: '3500'
		});

		return false;
	});
	
	$(".sortable").sortable();
	
	$('#myTab a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	})
	
	$('#editbtn').click(function(){
	    $('.uneditable').hide();
	    $('#editbtn').hide();
	    $('.editable').show();
	    $('#savebtn').show();
	});
	
	$('#savebtn').click(function(){
	     $('.uneditable').show();
	    $('#editbtn').show();
	    $('.editable').hide();
	    $('#savebtn').hide();
	});

	$('#addreminder').click(function(){
			$('#reminder-hide').hide();
			$('#reminder-show').fadeIn(1000);
	});
	
	$('.confirm-drop').click(function() {
		$('.status-enrolled').hide();
		$('.status-drop').fadeIn(1000);
		message_dropstudy();
		$('#editbtn').attr("disabled", "disabled");
		$('#failbtn').attr("disabled", "disabled");
		$('#dropbtn').attr("disabled", "disabled");
	});
	
		function message_dropstudy(){
			var unique_id = $.gritter.add({
			title: 'Drop Study Successfully!',
			text: 'Subject <strong>0000001</strong> has already dropped <br /> Study: Anti-diabetic Drug: NoDiabetic',
			sticky: false,
			time: '',
			class_name: 'my-sticky-class'
			});
		}
		
	$('#data_query_example').popover();
});


