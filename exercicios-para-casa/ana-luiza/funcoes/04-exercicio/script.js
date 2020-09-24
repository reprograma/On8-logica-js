// 4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maioridade(idade) {
    idade = Number(prompt('Digite a sua idade.'))

    if (idade >= 18) {
        return 'Você é maior de idade!'
    } else {
        return 'Você é menor de idade!'
    }
     
}

console.log(maioridade())