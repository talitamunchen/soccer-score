$(document).ready(function() {
	$.ajax({
		url : "buscaTime.php",
		dataType : "json",
 		success : function(resp){
			for(i=0; i < resp.length; i++){
				$("#nome").append("<option>" + resp[i].nome + "</option>");
                                $("#nome2").append("<option>" + resp[i].nome + "</option>");
                                //alert(resp[i].nome);
			}
		},
		error : function(){
			alert("ERRO: " + err.status);
		}
	});
	
	
	
});