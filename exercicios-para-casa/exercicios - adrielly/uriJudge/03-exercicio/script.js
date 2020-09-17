let valor;
let par = 0,
  impar = 0,
  positivo = 0,
  negativo = 0;

for (let i = 0; i < 5; i++) {
  valor = prompt("Digite um número");

  if (valor % 2 == 0) {
    ++par;
  } else if (valor % 2 != 0) {
    impar++;
  }

  if (valor > 0) {
    positivo++;
  } else if (valor < 0) {
    negativo++;
  } else {
  }
}
console.log("valores pares:", par);
console.log("valores impares: ", impar);
console.log("valores positivos: ", positivo);
console.log("valores negativos: ", negativo);
