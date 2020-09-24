let codigo = Number(prompt("Qual o codigo do Lanche?"));
let quantidade = Number(prompt("Quantos você vai querer??"));

let preco = 0;

switch(codigo){
  case 1: 
    preco = 4;
    break;
  case 2: 
    preco = 4.5;
    break;
  case 3: 
    preco = 5;
    break;
  case 4: 
    preco = 2;
    break;
  case 5: 
    preco = 1.5;
    break;
}

const total = preco * quantidade; 

console.log(`Total: R$ ${total.toFixed(2)}`); 