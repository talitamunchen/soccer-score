$(document).ready(function() {
    $("#time1").change(function() {
        var time1 = $("#time1").val();
        var time2 = $("#time2").val();
        if (time1 == time2){
            $("#time2").val("");
        }
        $("#time2 option").show();
        if (time1){
            $("#time2 option[value=" + time1 + "]").hide();
        }
    });
    $("#time2").change(function() {
        var time1 = $("#time1").val();
        var time2 = $("#time2").val();
        if (time1 == time2){
            $("#time1").val("");
        }
        $("#time1 option").show();
        if(time2){
            $("#time1 option[value=" + time2 + "]").hide();
        }
    });

	$.ajax({
		url : "buscaTime.php",
		dataType : "json",
 		success : function(resp){
			for(i=0; i < resp.length; i++){
				$("#time1").append("<option value='" + resp[i].nome +"'>" + resp[i].nome + "</option>");
                $("#time2").append("<option value='" + resp[i].nome +"'>" + resp[i].nome + "</option>");
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
                alert("Participante cadastrado com sucesso!");
                //window.location="index.html"; //Redireciona pro index.html após cadastrar
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
                //alert("Funfou");
                
            $.ajax({
                url : "ranking.php",
                dataType : "json",
                success : function(resp){
                    $("#tabela").empty();
                    $("#tabela").append("<tr><th>Participantes</th><th>Pontuação</th><th>Gols</th></tr>");
                    //alert("Funfou");
                for (i = 0; i < resp.length; i++) {
                    $("#tabela").append("<tr><td>"+ resp[i].participante + "</td><td>"+ resp[i].pontos + "</td><td>"+ resp[i].scorefavor + "</td></tr>");
                    }
                },
                error : function(){
                        alert("ERRO: " + err.status);
                }
            });

            },
            error : function(err){
                alert("ERRO: " + err.status);
            }
        });
    });
    
    /* $("#atualiza-ranking").click(function(){
        $.ajax({
            url : "ranking.php",
    dataType : "json",
    success : function(resp){
                $("#tabela").empty();
                $("#tabela").append("<tr><th>Participantes</th><th>Pontuação</th><th>Gols</th></tr>");
                //alert("Funfou");
                for (i = 0; i < resp.length; i++) {
                $("#tabela").append("<tr><td>"+ resp[i].participante + "</td><td>"+ resp[i].pontos + "</td><td>"+ resp[i].scorefavor + "</td></tr>");
                }
    },
    error : function(){
        alert("ERRO: " + err.status);
    }
        });
    });*/  
});