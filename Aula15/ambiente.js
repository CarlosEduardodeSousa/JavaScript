let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
console.log(`O valor 8 está na posição ${pos}`)



num.push() /*num[5] = 18 == num.push(17) ambos adicionam números ao array*/
num.length /*Comando para ver o tamanho do vetor */
num.sort() /*ordena os elemntos me ordem crescente */
num.indexOf() /*Busca o número do index onde o valor se encontra*/