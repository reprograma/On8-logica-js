// 3. Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconto(preco) {
    preco = prompt('Qual o preço do produto?')
    cincoPorcento = preco * 0.05
    total = preco - cincoPorcento

    return `Parabéns! Você recebeu 5% de desconto! O valor total a pagar é de: ${total}` 
}

console.log(desconto())