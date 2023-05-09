//Q11

let pesoPeixe = 54;
let limite = 50;
let excedente;
excedente = pesoPeixe - limite;
const multa = 4.00;
let multaValor = excedente * multa;
//saída de dados
console.log("Peso do peixe: " +pesoPeixe);
console.log("Peso excedente: "+excedente);
console.log("Valor da multa: R$ "+multaValor);

//explicação da aula 02**********************************

// >maior  <menor >=maior ou igual <=menor ou igual
// ==(igualdade) !=(diferente)
// ===(igualdade de valor e tipo) !==(diferente de valor e tipo)

//estruturas condicionais
var hora = prompt("Digite um número"); //receber os dados no navegador
console.log(hora);
if(hora==11){//SE
    alert("Bom dia!!") //mostrar no navegador
}else if(hora==14){//SENÃO SE
    alert("Boa tarde!!")
}else{//SENÃO
    alert("Hora indisponivel!!")
}