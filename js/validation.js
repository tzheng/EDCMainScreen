   //fold and unfold div boxes
   var init = 0;
   $(".script-edit").click(function(){
   		var $target = $(this).next('.box-content');
   		
   		if($target.is(':visible')) 
   			{ 
   				$('.arrow',$(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
   				$("#validation-footer").css("margin-bottom","40px");
   			} else {
   				$('.arrow',$(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
   				$("#validation-footer").css("margin-bottom","380px");
   			} 	
   		$target.slideToggle();
   						   
		if (init == 0) {
			var editor = CodeMirror.fromTextArea(document.getElementById("code"), {  
		       lineNumbers: true,  
		       extraKeys: {"Ctrl-Space": function(cm) {CodeMirror.simpleHint(cm, CodeMirror.javascriptHint);}}  
		   });  
		   $(".CodeMirror-scroll").hover(function(){  
		       $(this).get(0).style.cursor = "text";  
		   }); 
		   init = init + 1;
		}
   });
   
   
    //function for Sample test
    var elementCount = 0; 
	function AddLine(){     
        var TemO=document.getElementById("sample_test_input");     
        var newInput = document.createElement("tr");      
          
        elementCount = elementCount + 1;     
          
         
        newInput.id="variable"+(elementCount);     
        
        newInput.innerHTML = '<tr>' 
							+	'<td>'
							+		'<select data-placeholder="Variable..." class="chzn-select">'
							+				 	'<option value=""></option>'
							+		 		 	'<option value="age">Age</option>'
							+		 		 	'<option value="gender">Gender</option>'
							+		 		 	'<option value="pregnent">Pregnent</option>'
							+		'</select>'
							+	'</td>'
							+	'<td> <input type="text"/>  <a href="#" onclick="DelLine(\'variable'+elementCount+'\')"> <i class="icon-remove"></i> </a> </td>'
							+	'</tr>';
             
        TemO.appendChild(newInput);     
        $(".chzn-select").chosen();
    }     
    
	function DelLine(lineId) {
		var tempD = document.getElementById(lineId);
		tempD.remove();
	}

