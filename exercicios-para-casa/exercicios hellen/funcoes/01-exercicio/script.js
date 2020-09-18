// 1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

var n = prompt('Digite um número')
var total = n/2;
var resultado = total % 2 == 0 ? ' Par' : ' Impar';
alert(total + ' é ' + resultado);
