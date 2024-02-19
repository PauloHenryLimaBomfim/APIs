// (bid(compra) + ask(venda))/2 = cotação atual
// varbid é a variação - Se variação > 0 subiu, se variação < 0 desceu.
const obterDados=()=>{
    const endpoint = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";
    fetch(endpoint).then(res=>res.json()).then(dados=>{
        let setaDolar = document.getElementById('setaDolar');
        let setaEuro = document.getElementById('setaEuro');
        let valorDolar = document.getElementById('valorDolar');
        let valorEuro = document.getElementById('valorEuro');

        valorDolar.innerHTML = ((Number(dados.USDBRL.ask) + Number(dados.USDBRL.bid)) / 2).toFixed(2);
        valorEuro.innerHTML = ((Number(dados.EURBRL.ask) + Number(dados.EURBRL.bid)) / 2).toFixed(2);

        if(dados.USDBRL.varBid >= 0){
            valorDolar.style.color = '#0ed145';
        }
        else{
            setaDolar.src = "SetaVermelha.png";
            valorDolar.style.color = '#d41920';
        }

        if(dados.EURBRL.varBid >= 0){
            valorEuro.style.color = '#0ed145';
        }
        else{
            setaEuro.src = "SetaVermelha.png";
            valorEuro.style.color = '#d41920';
        }
        console.log(dados.EURBRL.varBid);
    });
}
setInterval(obterDados(), 30000);