
function jqLinkTo(id){
	var url = 'pastes/' + id
	$.getJSON(
		url,
        function(jsonData){
        	if(jsonData){
				$('#paste_content')[0].value=jsonData.content
                $('#paste_button').remove()
            }else{
				alert('Error retrieving paste content')
            }
        }
	)
}

function validatePaste(){
	if($('#paste_content')[0].value){
		$("#new_paste")[0].submit();
	}else{
		$("#validation-msg").fadeIn(100)
	}
}

