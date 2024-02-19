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