const nome = prompt("Digite o nome da funcionaria");
const salario = Number(prompt("Digite o salário da funcionaria"));
const vendas = Number(prompt("Digite o montante total de vendas da funcionaria"));

const comissao = vendas * 0.15;
const total = salario + comissao;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);