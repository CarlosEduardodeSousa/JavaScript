let num = document.querySelector('#txtnum') 
let lista = document.querySelector('#lista')
let valores = []
let res = document.querySelector('#res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }
    else{
        alert('Valor invalido ou já encontrado na lista')
    }
    num.focus() 
}

function finalizar(){
    if(valores.length == 0){
        alert(`Insira valores na lista!`)
    }
    else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let i in valores){
            soma += valores[i]
            if (valores[i] > maior){
                maior = valores[i]
            }
            else if (valores[i] < menor){
                menor = valores[i]
            }
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número digitado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A  média dos valores é ${media}</p>`
    }
}