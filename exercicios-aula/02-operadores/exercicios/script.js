/**
    Documentação para consulta

    Operadores
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

    Number()
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number

    Prompt()
    https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt

    Alert()
    https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

 */


/* 
  1. Crie um algoritmo, que solicite ao usuário dois valores, calcule a soma desses números e mostre o resultado em um alerta.

  - Entrada de dados: Ler dois números 
  - Processamento: calcular a soma 
  - Saída: exibir a soma dos valores

  Obs: Utilizar o Number() para converter o tipo da variável em número.
*/ 
const numero1 = Number(prompt('informe o um numero 1'))
const numero2 = Number(prompt('informe o um numero 2'))

const valorTotal = numero1 + numero2

alert(valorTotal)


/* 
  2. Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

  - Entrada de dados: Ler o valor do jantar
  - Processamento: calcular a taxa do garçom e valor total a ser pago.
  - Saída: Exibir no console o valor do jantar, taxa do garçom e total a pagar

  Obs: Utilizar o Number() para converter o tipo para numero dos dados.
*/


const valorDoJantar = Number(prompt('Informe o valor do Jantar'))

const taxaGarcom = valorDoJantar * 0.10 // valorDoJantar * (10 / 100)

const valorTotal = valorDoJantar + taxaGarcom

console.log('O valor do jantar ', valorDoJantar)
console.log('Taxa do Garçom', taxaGarcom)
console.log('O valor total', valorTotal)

*/

/* 
  3.  Crie um algoritmo que leia dois valores, verifique se eles são iguais.

    - Entrada de dados: Ler dois valores
    - Processamento: verificar se o valor A é igual o valor B
     - Saída: Exibir no console a mensagem "O valor A é igual valor B, verdadeiro ou false?"
     poder ser assim: const comparacao = numero1 === numero2*/
     
     const numero1 = Number(prompt('Informe o numero 1'))
     const numero2 = Number(prompt('Informe o numero 2'))
     
     
    console.log('O valor ' + numero1 + 'é igual ao' + numero2 + numero1 === numero2)
    console.log('O valor ${numero1} é igual ao ${numero2}, ${numero1} === ${numero2}')

// 4. Declare uma nova variável chamada `calculadora`, e adicione uma instrução somando os valores 10 e 5.
let calculadora = 10 + 5

// 5.  Atribua à variável `calculadora` todo o valor dela, somando 1, usando o operador de soma abreviado.
++calculadora // calculadora = calculadora + 1

// 6. Atribua à variável `calculadora` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
calculadora *=3
// 7. Qual é o valor da variável `calculadora` até aqui?
console.log(calculadora)


