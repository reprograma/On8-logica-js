// 1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function validarNumero(a) {
    if (a % 2 == 0) {
        return  a + " é par!";
    } else {
        return a + " é impar!";
    }
}

const numero = Number(prompt("Digite um número"));

const resultado = validarNumero(numero);
console.log("Seu número " + resultado);