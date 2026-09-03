let peso = document.querySelector('#txtpeso')
let altura = document.querySelector('#txtaltura')
let res = document.querySelector('#res')
let imc



function calcularIMC(){
    imc = Number(peso.value) / (Number(altura.value * altura.value))
    if(Number(peso.value) == 0 || Number(altura.value == 0)){
    alert(`verifique se todos os ads foram inseridos!`)
    }
    else{
        res.innerHTML = `<p>O IMC é ${imc.toFixed(2)}</p>`
        if(imc < 18.5){
            res.innerHTML += `<p>Status: Abaixo do peso</p>`
        }
        else if (imc >= 18.5 && imc <=24.9){
            res.innerHTML += `<p>Status: Peso Normal</p>`
        }
        else if (imc >= 25 && imc <= 29.9){
            res.innerHTML += `<p>Status: Sobrepeso</p>`
        }
        else{
            res.innerHTML += `<p>Status: Obesidade</p>`
        }
    }
}