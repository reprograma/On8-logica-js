function infoVendedor (a, b, c) {

    const porcentagemVendas = (c * 15) / 100;
    const totalParaReceber = porcentagemVendas + b;

    console.log(`${a} vai receber no total: ${totalParaReceber.toFixed(2)}`);

}

const nome = prompt("Digite o nome do vendedor:");
const salario = Number(prompt("Digite o salário:"));
const vendas = Number(prompt("Qual o valor total de vendas :"));

infoVendedor(nome, salario, vendas); 