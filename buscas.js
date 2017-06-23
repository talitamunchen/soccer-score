$(document).ready(function() {
    $.ajax({
        url : "buscaTime.php",
        //dataType : "json",
        success : function(resp){
            alert(resp);
            for(i=0; i < resp.length; i++){
                $("#nome").append("<option> + resp[i].nome + </option>");
                alert(resp[i].nome);
            }
        },
        error : function(){
            alert("ERRO: " + err.status);
        }
    });

   // alert("oi");

});