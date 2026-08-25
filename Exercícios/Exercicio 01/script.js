function carregar(){
    var msg = document.querySelector('#msg')
    var foto = document.querySelector('#foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        foto.src = 'imagens/manhâ.jpg'
        document.body.style.background = '#D8AB78'
        msg.style.color = '#D8AB78'
    }
    else if (hora >= 12 && hora <= 18){
        foto.src = 'imagens/tarde.jpg'
        document.body.style.background = '#BAB08A'
        msg.style.color = '#BAB08A'
    }
    else{
        foto.src = 'imagens/noite.jpg'
        document.body.style.background = '#37425E'
        msg.style.color = '#37425E'
    }
}

