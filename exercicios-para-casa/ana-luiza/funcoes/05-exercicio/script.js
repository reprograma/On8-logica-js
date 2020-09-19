// 5. Crie uma função que receba um nome e retorne uma saudação na forma de uma string. `Exemplo: "Olá, Natália"`

function saudacao(nome, sobrenome) {
    nome = prompt('Qual o seu nome?')
    sobrenome = prompt('E seu sobrenome?')

    return `Olá, ${nome} ${sobrenome}! Bem vindo(a)!` 
}

console.log(saudacao())