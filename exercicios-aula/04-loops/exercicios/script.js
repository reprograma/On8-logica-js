/**
    Documentação para consulta

    for
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    do while
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while

    while
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while

 */

/* 
  1. Utilizando a estrutura de repetição for, mostre no console todos números 0 ao 100,
  inclusive esses 2
*/

 for(let i = 0; i <= 100; i++){
 console.log(i)
}

/* 
  2. Utilizando a estrutura de repetição for, mostre no console apenas os números pares de 1 ao 50.
  - Números pares são todos os números que divididos por 2 tem resto 0
  - Qual operador que retorna o resto da divisão? Vamos usar ele!
*/

 for(let i = 1; i <=50; i++){
  if(i % 2 === 0){
    console.log(i)
 }
}



/* 
  3. Utilizando a estrutura de repetição while, mostre no console apenas os números ímpares de 50 ao 120.
*/


 let contador = 50;

    while(contador <= 120){
    if(contador % 2 !== 0) {
     console.log(contador)
     }
      contador = contador + 1;
   }


/* 
  3. Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while"
*/
 


let contador = 20;

while(contador <= 31){
  console.log(contador)
  contador = contador + 1// ou contador ++ // ou contador +=1

}


/* 
  4. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que dado um número, print (console.log) a tabuada do mesmo de 1 a 10.

*/


for(let i = 0; i <= 10; i++){
  console.log(`${numero} x ${i} = ${numero * i}`)
}
