let nome = prompt("Digite o seu nome");
let salario = Number(prompt("Digite o seu salário fixo"));
let totalVendas = Number(prompt("Digite o total de vendas efetuadas por mês"));
const comissao = totalVendas * 0.15;
let total = salario + comissao;

console.log("TOTAL: ", total);
