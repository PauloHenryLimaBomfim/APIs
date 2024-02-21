
function compartilhar(){ // Compartilhar para dispositivos moveis
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
  let facebook = document.getElementById('facebookShareButton');
  let whatsapp = document.getElementById('whatsappShareButton');

  twitter.href = `http://twitter.com/share?&url=${link}&text=${titulo}`;
  facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
  whatsapp.href = `https://api.whatsapp.com/send?text=${titulo}%20${link}`;
}

function copiarAreaTransferencia(){
  let link = encodeURI(window.location.href);
  navigator.clipboard.writeText(link);
  alert('Copiado para Area de Transferência')
}

