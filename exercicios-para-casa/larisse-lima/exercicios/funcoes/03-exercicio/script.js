// 3.Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconto(a) {
    return (a * 5) / 100;
}
const valor = parseFloat(prompt('Informe o valor total'))
alert(`O valor do desconto ${valor * 0.05}`)
