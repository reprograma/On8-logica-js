/**
    Documentação para consulta

    if/ else if/ else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

 */


/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/

const letra = prompt('Digite uma letra do alfabeto')

// Switch
switch(letra){
   case 'a':
   case 'e':
   case 'i':
   case 'o':
   case 'u':
         console.log('A letra é uma vogal')
        break;
    default: 
        console.log('a letra é uma consoante')
}

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
   console.log('a letra é uma vogal')
} else {
   console.log('a letra é uma consoante')
}



/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/
const numero = Number(prompt('Informe um numero de 1 a 7'))
let diaDaSemana; 

switch(numero){
   case 1: diaDaSemana = 'Domingo';
           break;
   case 2: diaDaSemana = 'Segunda';
           break;
   case 3: diaDaSemana = 'Terça';
           break;
   case 4: diaDaSemana = 'Quarta'
           break;
   case 5: diaDaSemana = 'Quinta';
           break;
   case 6: diaDaSemana = 'Sexta';
           break;
   case 7: diaDaSemana = 'Sabado';
           break;
   default: 
      console.log('tu digitou errado mano')
}

console.log('O dia da semana é' + diaDaSemana)




/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
let number1 = Number(prompt('Digite um numero'))
let number2 = Number(prompt('Digite outro numero, parça'))

if(number1 > number2){
   console.log(`O ${number1} é maior que o numero ${number2}`)
} else if (number1 <  number2){
  console.log(`O ${number1} é menor que o numero ${number2}`)
} else {
  console.log('os numeros são iguais')
}

let number1 = Number(prompt('Digite um numero'))
let number2 = Number(prompt('Digite o outro numero, parça'))

if(numbe1 > number2){
  console.log('0 ${number1} é maior que o numero ${number2})
} else if (number1 < number2){ 
  console.log("os numeros iguais")
}


/*

  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  Se a media for igual ou maior que 7 - Aprovado
  Se a media for maior e igual a cinco e menor que 7 - Recuperação 
  Se a media for menor que 5 - Reprovado

  Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
  Alunos de recuperação devem ver a mensagem: Você está de recuperação!
  Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/

const nota1 = Number(prompt('informe a sua primeira nota'))
const nota2 = Number(prompt('informe a sua segunda nota'))
const nota3 = Number(prompt('informe a sua terceira nota'))

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
  console.log('Parabéns, você foi aprovado, aproveite suas férias!')
} else if(media >= 5 && media < 7){
   console.log('que pena, você foi reprovado')
} else { 
   console.log('reprovado')
}

