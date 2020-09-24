// 1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.


let numero = window.prompt("Digite um número")

function definirNumero(numero){
  if(numero%2==0){
  return "par";
  }else{
  return "impar";
  }
}

