const nome = prompt('Insira aqui o nome do vendedor')
const salario = Number(prompt('Insira aqui seu salário fixo'))
const totalDeVendas = Number(prompt('Insira aqui o total de vendas efetuadas no mês (em dinheiro)'))

const comissao = totalDeVendas *0.15
const valorTotal = (salario + comissao).toFixed(2)


alert('Total = R$ ' + valorTotal)