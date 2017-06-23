<?php
    $con = pg_connect("host=localhost port=5432 dbname=TrabalhoGB user=postgres password=postgres");
    $comando = "SELECT DISTINCT nome FROM participantes ORDER BY nome";
    $resp = pg_query($con, $comando);
    $matriz = array();
   // echo $comando;
    while($linha = pg_fetch_assoc($resp)){
        $matriz[] = $linha;
    }
    echo json_encode($matriz);
    pg_close($con);
?>