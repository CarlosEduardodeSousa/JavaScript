function tabuada(){
    var txtnum = document.querySelector('#txtnum')
    var res = document.querySelector('#res')

    var num = Number(txtnum.value)
    var resultado
    if(txtnum.value.length == 0){
        alert(`[ERRO]: Adicione um número para gerar a tabuada!`)
    }
    else{
        for(var i = 1; i <= 10; i++){
            resultado = num * i
            res.innerHTML += `${num} x ${i} = ${resultado} <br>`
        }
    }
    
}