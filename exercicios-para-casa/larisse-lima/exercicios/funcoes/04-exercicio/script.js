// 4.Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function idade(anoNascimento) {
    anoNascimento = Number(prompt("Informe o ano de nascimento: "))

    if (2020 - anoNascimento >= 18) {
        return "Você é maior de idade"
    } else {
        return "Você é menor de idade"
    }
}

console.log(idade())
