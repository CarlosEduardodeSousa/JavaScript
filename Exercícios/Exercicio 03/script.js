function contar(){
    var inicio = document.querySelector('#txtinicio')
    var fim = document.querySelector('#txtfim')
    var passo = document.querySelector('#txtpasso')
    var res = document.querySelector('#res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(inicio.value.length == 0){
        alert(`[ERRO]: Faltam dados!`)
    }
    else{
        if(p == 0){
            alert(`Passo invalido! Considerando passo 1`)
            p = 1
        }

        if(i < f){
            while(i <= f){
                res.innerHTML += `${i} \u{1F449}`
                i+=p
            }
        }

        else if (i > f){
            while(i >= f){
                res.innerHTML += `${i} \u{1F449}`
                i-=p
            }

        }
        res.innerHTML += ` \u{1F3C1} `
    }
}