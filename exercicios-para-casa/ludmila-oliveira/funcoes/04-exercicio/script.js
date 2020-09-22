// 4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function idade(a) {
    let now = new Date;

    const calcularIdade = now.getFullYear() - a

    if (calcularIdade >= 18) {
        return "é maior de idade, tem " + calcularIdade + " anos.";
    } else {
        return "é menor de idade, tem " + calcularIdade + " anos.";
    }
}

const anoNasc = Number(prompt("Qual seu ano de nascimento? "));

const resultado = idade(anoNasc);
console.log("Você " + resultado);