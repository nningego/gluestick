// application.js
//= require jquery
//= require bootstrap.min

function jqLinkTo(id){
	var url = 'pastes/' + id
	$.getJSON(
		url,
        function(jsonData){
        	if(jsonData){
				$('#paste_content')[0].value=jsonData.content
            }else{
				alert('Error retrieving paste content')
            }
        }
	)
}