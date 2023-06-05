// let aluno = {}

// aluno["nome"] = prompt("Informe o nome: ")
// aluno["idade"] = prompt("Informe a idade: ")
// aluno["telefone"] = prompt("Informe o telefone: ")
// aluno["matricula"] = prompt("Informe a matricula: ")
// aluno["nome"] = prompt("Informe o nome: ")
// aluno["idade"] = prompt("Informe a idade:")
// console.log(aluno)
// console.log(aluno.nome+" tem "+aluno.idade+" anos")

// Questões 
//q01
let pessoa = {
    nome:"Juci",
    idade:36,
    telefone:"(85) 98158-6400",
    endereco:"Rua 12, 123"
}
//q02
console.log(pessoa.nome)
//q03
let pessoa = {}

pessoa["nome"] = prompt("Informe o nome: ")
pessoa["idade"] = prompt("Informe a idade: ")
pessoa["telefone"] = prompt("Informe o telefone: ")
pessoa["endereco"] = prompt("Informe a endereco: ")
//q04
console.log(pessoa)


//q05
let agenda = {}

let numContatos = Number(prompt("Informe a qtde de contatos: "))
for(i=0;i<numContatos;i++){
    agenda["nome"+i] = prompt("Informe o nome do contato: ")
    agenda["telefone"+i] = prompt("Informe o telefone do contato: ")
}
console.log(agenda)
let nome = prompt("Informe o nome: ") //Fernanda

for(i=0;i<numContatos;i++){
    console.log(agenda["nome"+i])
    if(nome==agenda["nome"+i]){
        console.log(agenda.telefone)
    }else if(nome != agenda['nome' + i]){
        console.log('dado não encontrado')
    }
}

let numeros = [1,2,3,5,6]

let soma = 0
for(i=0;i<numeros.length;i++){
    soma = soma + numeros[i]
}
console.log(soma)

/************************************ */

let total = numeros.reduce(function(total, item){
        return total + item;
    }, 0);
    console.log(total);

