// - [Exercício 06](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

function dadosVendedor (a, b, c) {

    const porcentagemVendas = (c * 15) / 100;
    const totalParaReceber = porcentagemVendas + b;

    console.log(`${a} vai receber no total: ${totalParaReceber.toFixed(2)}`);

}

const nome = prompt("Qual nome do vendedor?");
const salario = Number(prompt("Qual o salário fixo dele?"));
const vendas = Number(prompt("Quanto valor total de vendas?"));

dadosVendedor(nome, salario, vendas);