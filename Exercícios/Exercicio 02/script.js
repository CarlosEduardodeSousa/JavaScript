function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert(`[ERRO]: Verifique os dados e tente novamente!`)
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-masculino.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-masculino.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-masculino.jpg')
            }
            else{
                img.setAttribute('src', 'imagens/idoso-masculino.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-feminino.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-feminino.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto-feminino.jpg')
            }
            else{
                img.setAttribute('src', 'imagens/idosa-feminina.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}