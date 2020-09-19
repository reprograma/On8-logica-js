// 3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconto() {
    valorDoProduto = Number(prompt('Qual é o valor do produto?'));

    return valorDoProduto * 0.05
}

alert('O desconto é: R$' + desconto())