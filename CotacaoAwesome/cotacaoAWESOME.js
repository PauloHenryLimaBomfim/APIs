const endpoint = "https://economia.awesomeapi.com.br/json/last/";

// (bid(compra) + ask(venda))/2 = cotação atual
// varbid é a variação
// pctChance é a porcentagem de variação

function obterDadosMain(){
    fetch(endpoint + "USD-BRL,EUR-BRL").then(res=>res.json()).then(dados=>{
        let setaDolar = document.getElementById('setaDolar');
        let setaEuro = document.getElementById('setaEuro');
        let valorDolar = document.getElementById('valorDolar');
        let valorEuro = document.getElementById('valorEuro');

        valorDolar.innerHTML = ((Number(dados.USDBRL.ask) + Number(dados.USDBRL.bid)) / 2).toFixed(2).replace('.',',');
        valorEuro.innerHTML = ((Number(dados.EURBRL.ask) + Number(dados.EURBRL.bid)) / 2).toFixed(2).replace('.',',');

        if(dados.USDBRL.pctChange >= 0){
            valorDolar.style.color = '#0ed145';
        }
        else{
            setaDolar.src = "SetaVermelha.png";
            valorDolar.style.color = '#d41920';
        }

        if(dados.EURBRL.pctChange >= 0){ 
            valorEuro.style.color = '#0ed145';
        }
        else{
            setaEuro.src = "SetaVermelha.png";
            valorEuro.style.color = '#d41920';
        }
    });
}