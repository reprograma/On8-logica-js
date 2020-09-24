// [Exercício 01](thtps://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

const codProduto = parseInt(prompt
    (`Informe o código do lanche \n 1 - Cachorro quente R$ 4,00 \n  2 - X-Salada R$ 4,50  \n 3 - X-Bacon R$ 5,00 \n  4 - Torrada simples R$ 2,00  \n 5 - Refrigerante R$ 1,50`))

const quantidade = parseInt(prompt('Informe a quantidade do produto'))
switch (codProduto) {
    case 1:
        preco = 4.00;
        produto = 'Cachorro Quente'
        break
    case 2:
        preco = 4.50;
        produto = 'X-Salada'
        break
    case 3:
        preco = 5.00;
        produto = 'X-Bacon'
        break
    case 4:
        preco = 2.00;
        produto = 'Torrada Simples'
        break
    case 5:
        preco = 1.50;
        produto = 'Refrigerante'
        break
    default:
        alert('Produto Invalido')

}
parseFloat(alert(`Valor total: ${preco * quantidade}`))
