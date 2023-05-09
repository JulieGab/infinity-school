// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Preecha o campo do peso', false);
    return;
  }

  if (!altura) {
    setResultado('Preecha o campo do altura', false);
    return;
  }

  console.log(peso)
  console.log(altura)

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  console.log(imc)
  console.log(nivelImc)

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);

  const imcResult = document.querySelector('#imc-result');
  imcResult.textContent = msg;
});




function getNivelImc (imc) {
  if(imc<18.5){
    return nivel="Abaixo do peso";
  }else if(imc>=18.6&&imc<=24.9){
    nivel="Peso ideal";
  }else if(imc>=25&&imc<=29.9){
    nivel="Levemente acima do peso";
  }else if(imc>=30&&imc<=34.9){
    nivel="Obesidade grau I";
  }else if(imc>=35&&imc<=39.9){
    nivel="Obesidade grau II";
  }else{
    nivel="Obesidade grau III";
  }

  console.log(nivel)
  return nivel;
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
}
