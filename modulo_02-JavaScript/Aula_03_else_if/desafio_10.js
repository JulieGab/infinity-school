//*************************************************q10 - DESAFIO
//primeiro ponto
let j1 = Number(prompt("Digite os pontos do primeiro jogador: "));
let j2 = Number(prompt("Digite os pontos do segundo jogador: "));
let j3 = Number(prompt("Digite os pontos do terceiro jogador: "));

//segundo ponto
if (j1 > j2 ){
    alert("A ordem das nota decresente:"+j1+" - "+j2+" - "+j3)
}else if(j1 > j3 && j3 > j2){
    alert(`A ordem das nota decresente: ${j1} ${j3} ${j2}`)
}else if(j2 > j1 && j1 > j3){
    alert(`A ordem das nota decresente: ${j2} ${j1} ${j3}`)
}else if(j2 > j3 && j3 > j1){
    alert(`A ordem das nota decresente: ${j2} ${j3} ${j2}`)
}else if(j3 > j2 && j2 > j1){
    alert(`A ordem das nota decresente: ${j3} ${j2} ${j1}`)
}else if(j3 > j1 && j1 > j2){
    alert(`A ordem das nota decresente: ${j3} ${j1} ${j2}`)
}else {
    alert("opção invalida")
}

//terceiro ponto
let media = (j1+j2+j3)/3
if(media<100){
    alert("Média: "+media);
}else{
    alert("Equipe desclassificada");
}