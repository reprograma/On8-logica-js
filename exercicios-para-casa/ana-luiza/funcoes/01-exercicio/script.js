// 1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar(numero) {
    numero = Number(prompt('Digite um número.'))

    if(numero % 2 == 0) {
        return 'Esse número é par!'
    } else {
        return 'Esse número é impar!'
    }
}

console.log(parOuImpar())