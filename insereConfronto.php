<?php
    $con = pg_connect("host=localhost port=5432 dbname=TrabalhoGB user=postgres password=postgres");
    $time1 = $_POST['participante1'];
    $time2 = $_POST['participante2'];
    $score1 = $_POST['score1'];
    $score2 = $_POST['score2'];
    $comando = "INSERT INTO disputas (participante1, participante2, score1, score2) VALUES ('$time1', '$time2', '$score1', '$score2')";
    pg_query($con, $comando);
    echo $comando;
    $comando = "SELECT participante1, participante2, score1, score2 FROM disputas";
    $resp = pg_query($con, $comando);
    $matriz = array();
    while ($linha = pg_fetch_assoc($resp)) {
        $matriz[] = $linha;
    }
    echo json_encode($matriz);	
    pg_close($con);
?>