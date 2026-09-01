function tabuada(){
    var txtnum = document.querySelector('#txtnum')
    var tab = document.querySelector('#seltab')

    var num = Number(txtnum.value)
    if(txtnum.value.length == 0){
        alert(`[ERRO]: Adicione um número para gerar a tabuada!`)
    }
    else{
        tab.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            tab.appendChild(item)
        }
    }
    
}