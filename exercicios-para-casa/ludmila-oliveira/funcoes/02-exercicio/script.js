// 2. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.

function multiplicar(a, b) {
    return a * b;
}

const numeroA = Number(prompt("Insira um número: "));
const numeroB = Number(prompt("Insira outro número: "));

var resultado = multiplicar(numeroA, numeroB);
console.log("O resultado da multiplicação é: " + resultado);
