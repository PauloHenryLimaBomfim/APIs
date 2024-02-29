<?php
$hostname = "localhost";
$bd = "receberPDF";
$usuario = "root";
$senha = "";

$mysqli = new mysqli($hostname, $usuario,$senha, $bd);
if($mysqli->connect_errno){
    print "Erro ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

function mostrarTodos($mysqli){
    $sqlquery = $mysqli->query("Select * FROM receberPDF");

    while($dados = $sqlquery->fetch_assoc()){
        $pdf = base64_encode($dados['PDF']);
        print '<embed src="data:application/pdf;base64,' . $pdf . '" width="800px" height="600px" />';
    }


}



