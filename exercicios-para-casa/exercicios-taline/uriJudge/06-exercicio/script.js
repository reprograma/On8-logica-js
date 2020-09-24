let nomeFuncionario = prompt('Digite o seu nome:')
let salario = parseFloat(prompt('Digite o seu sálario:'))
let valorVenda = parseFloat(prompt('Digite o total d vendas efetuadas:'))
comissao = valorVenda * 0.15
total = salario + comissao

console.log('TOTAL = R$', total.toFixed(2))
