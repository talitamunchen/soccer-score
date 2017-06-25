<?php
    $con = pg_connect("host=localhost port=5432 dbname=TrabalhoGB user=postgres password=postgres");
    $comando = "SELECT DISTINCT * FROM ranking ORDER BY pontos DESC";
    $resp = pg_query($con, $comando);
    $matriz = array();
    while($linha = pg_fetch_assoc($resp)){
            $matriz[] = $linha;
    }
    echo json_encode($matriz);
    pg_close($con);	
?>

