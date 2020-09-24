// 4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorDeIdade () {
    anoDeNascimento = Number(prompt('Qual é o ano que você nasceu?'));

    if (2020 - anoDeNascimento >= 18) {
        alert('Você é maior de idade!')
    }

    else {
        alert ('Você é menor de idade :(')
    }
}

(maiorDeIdade())
