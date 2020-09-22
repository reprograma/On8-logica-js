// 5. Crie uma função que receba um nome e retorne uma saudação na forma de uma string. `Exemplo: "Olá, Natália"`

function nome(nome) {
    nome = prompt("Digite o seu nome");
    return "Olá, " + nome;
}

console.log(nome());
