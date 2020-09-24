// 2. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.

function multiplicar(n1, n2) {
    n1 = Number(prompt('Digite um número.'))
    n2 = Number(prompt('Digite outro número.'))

    const multiplicacao = n1 * n2

    return `A multiplicação do número ${n1} com o número ${n2} é igual a: ${multiplicacao}` 
}

console.log(multiplicar())