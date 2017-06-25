<?php
    $con = pg_connect("host=localhost port=5432 dbname=TrabalhoGB user=postgres password=postgres");
    $nome = $_POST['nome'];
    $comando = "INSERT INTO participantes (nome) VALUES ('$nome')";
    pg_query($con, $comando);
    echo $comando;
    $comando = "SELECT nome FROM participantes";
    $resp = pg_query($con, $comando);
    $matriz = array();
    while ($linha = pg_fetch_assoc($resp)) {
        $matriz[] = $linha;
    }
    echo json_encode($matriz);
    pg_close($con);
?>