//Q.01

// function dobro(numero){
//     return numero * 2;
// }

// for(let i = 1;i<=3;i++){
//     let numero = Number(prompt("Informe o número: "));
//     alert(dobro(numero));
// }

//Q.02

function calculaMedia(){
    return (nota1_nota2+nota3)/3
}

for(let i = 1;i<=13;i++){
    let n1 = Numer(prompt("Informe a nota 1"))
    let n2 = Numer(prompt("Informe a nota 2"))
    let n3 = Numer(prompt("Informe a nota 3"))

    let media = calculaMedia(n1,n2,n3)

    alert('Média: '+media)
}