<?php
    require("conectar.php");
    if(isset($_FILES['arquivo'])){
        $arquivo = $_FILES['arquivo'];
        // Pegando a extensão do arquivo solicitado pelo nome
        $extensao = strtolower(pathinfo($arquivo['name'], PATHINFO_EXTENSION));
        // uniqid gera um nome aleatório para o arquivo enviado ( evita sobreescrever arquivos)
        $path = "arquivosPDF/" . uniqid() . "." . $extensao;
        if($extensao != "pdf"){
            // Mensagem de erro "Só é aceito PDF's nesse campo";
        }else{
            $verificacao = move_uploaded_file($arquivo['tmp_name'], $path);
            if($verificacao){
                print "<div><h1> Arquivo enviado com sucesso!</h1>";
                print "<a target='_blank' href='exibirPDFs.php'>Clique aqui para verificar</a></div>";
            }else{

            }
        }
    }

?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="estiloPDF.css">
        <title>Envio de PDFs</title>
    </head>
    <body>
        <form enctype="multipart/form-data" action="" method="post">
            <label>
                Envie um PDF: 
                <input type="file" name="arquivo">
            </label>
                <button type="submit">Enviar</button>
        </form>
    </body>
</html>