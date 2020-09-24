// [Exercício 01](thtps://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

function pedido(a, b){ //1 2

    if (a == 1) {
        return 4 * b;
    } else if (a == 2) {
        return 4.5 * b;         
    } else if (a == 3) {
        return 5 * b; 
    } else if (a == 4) {
        return 2 * b; 
    } else if (a == 5) {
        return 1.5 * b; 
    } else {
        return "opção inválida."
    }
}

const codigoProduto = Number(prompt("Digite o código do produto de 1-5."));
const quantidadeProduto = Number(prompt("Digite a quantidade desejada."));

console.log("Total R$" + pedido(codigoProduto, quantidadeProduto).toFixed(2));
