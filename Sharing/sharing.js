function compartilhar(){
    if (navigator.share) {
        navigator.share({
          title: document.getElementById('tituloPrincipal').innerText ,
          url: 'http://127.0.0.1:5500/Sharing/index.html'
        }).then(() => {
          console.log('Compartilhado com sucesso!');
        })
        .catch(console.error);
    } else {
        // fallback
    }
}