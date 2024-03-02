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
    $sqlquery = $mysqli->query("SELECT * FROM receberPDF");

    while($dados = $sqlquery->fetch_assoc()){
        print '<embed src="' . $dados['path'] . '" width="800px" height="600px" />';
    }
}

function inserir($mysqli, $nome, $path){
    $mysqli->query("INSERT INTO receberpdf (nome,path) VALUES('$nome', '$path')");
}


