// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038)

function fazerPedido(item, quantidade) {

    item = Number(prompt('Digite o código do item.'))
    quantidade = Number(prompt('Qual a quantidade?'))

    if(item === 1) {
        let total = 4 * quantidade
        return `Total: R$ ${total.toFixed(2)} reais.`
    } else if(item === 2) {
        let total = 4.5 * quantidade
        return `Total: R$ ${total.toFixed(2)} reais.`
    } else if(item === 3) {
        let total = 5 * quantidade
        return `Total: R$ ${total.toFixed(2)} reais.`
    } else if(item === 4) {
        let total = 2 * quantidade
        return `Total: R$ ${total.toFixed(2)} reais.`
    } else {
        let total = 1.5 * quantidade
        return `Total: R$ ${total.toFixed(2)} reais.`
    }

}

alert(fazerPedido())