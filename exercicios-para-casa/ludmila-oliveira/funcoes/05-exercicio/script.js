// 5. Crie uma função que receba um nome e retorne uma saudação na forma de uma string.
//  `Exemplo: "Olá, Natália"`

function nome(a) {
    return "Olá, " + a + "!!!";
}

const saudacao = prompt("Qual é o seu nome? ");
console.log(nome(saudacao));