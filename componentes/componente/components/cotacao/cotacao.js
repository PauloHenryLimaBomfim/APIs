export default function Cotacao(){
    return(
        <section>
            <div class="moedaIndividual" href="cotacoes.html?moeda=USD">
                <h1>Dólar</h1>
                <img src="img/SetaVerde.png" alt="" id="setaDolar"></img>
                <h2 id="valorDolar"></h2>
            </div>
            <div class="moedaIndividual" href="cotacoes.html?moeda=EUR">
                <h1>Euro</h1>
                <img src="img/SetaVerde.png" alt="" id="setaEuro"></img>
                <h2 id="valorEuro"></h2>
            </div>
        </section>
    )
}