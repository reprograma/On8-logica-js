//Crie uma função que calcula 5% de desconto retornando o valor do desconto.


const num=Number(prompt("Digite o valor a ser calculado: "))
let resultado=0

function desconto(valor){
    
    return ( resultado=valor*(0.05))
}
console.log("O  desconto foi de: "+"R$ "+ desconto(num))