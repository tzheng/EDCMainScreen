$(document).ready(function () {
    $('.group').hide();
    $('#option1').show();
    $('#selectMe').change(function () {
        $('.group').hide();
        $('#'+$(this).val()).show();
    })
});


var elementCount = 0;   
    
    function AddElement(){     
        var TemO=document.getElementById("strata_para");     
        var newInput = document.createElement("div");      
          
        elementCount = elementCount + 1;     
          
        //动态生成id。  
        newInput.id="input"+(elementCount);     
        
        newInput.innerHTML = '<div class="one_parameter span4">' 
							+				'<div class="left">'
							+					'<select class="input-small">'
							+						'<option>Age</option>'
							+						'<option>Gender</option>'
							+					'</select>' 
							+				'</div>'
							+				'<div class="one_parameter_right">'
							+               '</div>'
							+'</div>';
             
        TemO.appendChild(newInput);     
             
        var newline= document.createElement("br");   
          
        newline.id = "br"+(elementCount);   
          
        TemO.appendChild(newline);     
    }     
      
    //动态删除表单元素。     
    function delElement(mytype){     
        var TemO=document.getElementById("add");     
          
        if (elementCount>0){     
            var newInput = document.getElementById("input"+elementCount);      
             
            TemO.removeChild(newInput);   
     
            var newline= document.getElementById("br"+(elementCount));   
              
            elementCount = elementCount - 1;    
              
            TemO.removeChild(newline);     
        }   
    }     
