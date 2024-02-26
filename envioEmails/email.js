


function getAll(){

}

function inserirEmail(){
    let entrada ='{ "email": "' + document.getElementById('receberEmails').value + '" }';

    let dados_json = JSON.parse(entrada);
    console.log(dados_json);
}