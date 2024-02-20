function compartilhar(){
    if (navigator.share) {
        navigator.share({
          title: document.getElementById('tituloPrincipal').innerText ,
          text: document.getElementById('subtitulo').innerText,
          url: window.location.href.split('?')[0]
        }).then(() => {
          console.log('Compartilhado com sucesso!');
        })
        .catch(console.error);
    } else {
        
    }
}

function carregarLinks(){
  let link = encodeURI(window.location.href);
  let titulo = encodeURIComponent(document.getElementById('tituloPrincipal').innerText);
  let twitter = document.getElementById('twitterShareButton');

  twitter.href = `http://twitter.com/share?&url=${link}&text=${titulo}`; 
  link.select();
}
function copiarAreaTransferencia(){
  let link = encodeURI(window.location.href);
  navigator.clipboard.writeText(link);
  alert('Copiado para Area de Transferência')
}