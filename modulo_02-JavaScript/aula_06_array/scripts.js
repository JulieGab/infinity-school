// declaração de array

// const idades = [10,56,12,25,37]

// idades[3] = 50
// console.log(idades[3])
// console.log(idades)

// idades.push(60)// adiciona um item ao final do array
// console.log(idades)

// idades.pop()// remove o último item no final
// console.log(idades)

// idades.unshift(13)// adiciona um item no inicio do array
// console.log(idades)

// idades.shift()// remove o primeiro item do inicio
// console.log(idades)

// delete idades[0]
// console.log(idades)

// exercicios

// 1° - Dado o array abaixo, faça o que se pede:

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//Acrescente ao final da lista o número 27;
a.push(27)
console.log(a)
//Exclua o último elemento;
a.pop()
console.log(a)
//Apague o elemento de indice 0;
a.shift()
console.log(a)
// Faça a soma dos elementos;
let soma = 0;
for(i=0;i<a.length;i++){
    soma = soma + a[i];
}
console.log(soma)
// Mostre os número pares;
// const numerosPares = a.filter(function(numero) {
//     return numero % 2 === 0;
// })
// console.log(numerosPares)

// fazendo com laço for:
for(i=0;i<a.length;i++){
    if(a[i]%2==0)
    console.log(a[i])
}
// Mostre os números ímpares;
// const numerosImpares = a.filter(function(numero) {
//     return numero % 2 !== 0 ;
// })
// console.log(numerosImpares)
// ou:
for(i=0;i<a.length;i++){
    if(a[i]%2!=0)
        console.log(a[i])
}


