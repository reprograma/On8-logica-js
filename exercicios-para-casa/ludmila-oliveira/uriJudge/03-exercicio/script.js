// [Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1066)

function lerNumeros (a, b, c, d, e) {

    const numeros = [a, b, c, d, e]; //Foi criado um array para guardar os valores recebidos, permitindo depois que o for percorra o array e realize sua análise.

    let par = 0;
    let impar = 0;
    let positivo = 0;
    let negativo = 0;

    // A variável tem que ser "let" uma vez que ela vai mudar sempre devido ao incremento, valendo também para situações de decremento.

    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            par += 1   

        } if (numeros[i] % 2 !== 0) {
            impar += 1

        } if (numeros[i] > 0) {
            positivo += 1

        } if (numeros[i] < 0) {
            negativo += 1
        } 
    }

    return par + " valor(es) par(es). \n" + impar + " valor(es) impar(es). \n" + positivo + " valor(es) positivo(s). \n" + negativo + " valor(es) negativo(s)." //Para retornar os valores que foram guardados dentro das variáveis acima.
}

const numero1 = Number(prompt("Digite um número inteiro: "));
const numero2 = Number(prompt("Digite um número inteiro: "));
const numero3 = Number(prompt("Digite um número inteiro: "));
const numero4 = Number(prompt("Digite um número inteiro: "));
const numero5 = Number(prompt("Digite um número inteiro: "));


console.log(numero1, numero2, numero3, numero4, numero5); // Apenas para ver o que foi digitado.

console.log(lerNumeros(parseInt(numero1), parseInt(numero2), parseInt(numero3), parseInt(numero4), parseInt(numero5))); //parseInt deixa apenas a parte inteira do valor digitado, mas sem realizar arredondamento como o .toFixed().
