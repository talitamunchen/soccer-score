$(document).ready(function() {
	$.ajax({
		url : "buscaTime.php",
		dataType : "json",
 		success : function(resp){
			for(i=0; i < resp.length; i++){
				$("#time1").append("<option>" + resp[i].nome + "</option>");
                                $("#time2").append("<option>" + resp[i].nome + "</option>");
                                //alert(resp[i].nome);
			}
		},
		error : function(){
			alert("ERRO: " + err.status);
		}
	});
        
        $("#insere-participante").click(function(){
            $.ajax({
                url : "insereTime.php",
                method : "POST",
                //dataType : "json",
                data : {nome : $("#nome").val()},
                success : function(resp){
                    alert("Funfou");                   
                },
                error : function(err){
                    alert("ERRO: " + err.status);
                }
            });
        });
        
        $("#cadastra-confronto").click(function(){
            $.ajax({
                url : "insereConfronto.php",
                method : "POST",
                //dataType : "json",
                data : {participante1 : $("#time1").val(), participante2 : $("#time2").val(), score1 : $("#score1").val(), score2 : $("#score2").val()},
                success : function(resp){
                    alert("Funfou");
                    $("#tabela").empty();
                    $("#tabela").append("<tr><th>Participantes</th><th>Pontuação</th><th>Score</th></tr>");
                    //alert(resp.length);
                    for (i = 0; i < resp.length; i++) {
                        $("#tabela").append("<tr><td>"+ resp[i].participante + "</td><td>"+ resp[i].pontos + "</td><td>"+ resp[i].scorefavor + "</td></tr>");
                    }
                },
                error : function(err){
                    alert("ERRO: " + err.status);
                }
            });
        });
        
        $("#atualiza-ranking").click(function(){
            $.ajax({
                url : "ranking.php",
		dataType : "json",
 		success : function(resp){
                    $("#tabela").empty();
                    $("#tabela").append("<tr><th>Participantes</th><th>Pontuação</th><th>Score</th></tr>");
                   //alert("Funfou");
                  for (i = 0; i < resp.length; i++) {
                    $("#tabela").append("<tr><td>"+ resp[i].participante + "</td><td>"+ resp[i].pontos + "</td><td>"+ resp[i].scorefavor + "</td></tr>");
                    }
		},
		error : function(){
			alert("ERRO: " + err.status);
		}
                });
        });
});