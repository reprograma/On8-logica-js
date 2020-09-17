// 3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconto(a) {
    return (a * 5) / 100;
}

const valor = Number(prompt("Insira o valor total da refeição: "));
const resultado = desconto(valor);

console.log("O desconto de  5% para o garçom é de: " + resultado);