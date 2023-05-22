//q09
let saldo = Number(prompt("Digite o saldo: "));

if(saldo>0 && saldo<=500){
    alert("nenhum crédito");
}else if(saldo>=501 && saldo<=1000){
    alert("30% do valor do saldo médio\nSaldo médio: R$ "+(saldo+saldo*0.3) +"\nValor do crédito: R$ "+saldo*0.3);
}else if(saldo>=1001 && saldo<=3000){
    alert("40% do valor do saldo médio\nSaldo médio: R$ "+(saldo+saldo*0.4) +"\nValor do crédito: R$ "+saldo*0.4);
}else{
    alert("50% do valor do saldo médio\nSaldo médio: R$ "+(saldo+saldo*0.5) +"\nValor do crédito: R$ "+saldo*0.5);
}

