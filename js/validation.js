   //fold and unfold div boxes
   $(".script-edit").click(function(){
   		var $target = $(this).parent().parent().next('.box-content');
   		
   		if($target.is(':visible')) 
   			{ 
   				$('i',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
   				$("#validation-footer").css("margin-bottom","40px");
   			} else {
   				$('i',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
   				$("#validation-footer").css("margin-bottom","380px");
   			} 					   
		$target.slideToggle();
		
   });
   
   
   //java script for code.
	var editor = CodeMirror.fromTextArea(document.getElementById("code"), {  
       lineNumbers: true,  
       extraKeys: {"Ctrl-Space": function(cm) {CodeMirror.simpleHint(cm, CodeMirror.javascriptHint);}}  
   });  
   $(".CodeMirror-scroll").hover(function(){  
       $(this).get(0).style.cursor = "text";  
   });  