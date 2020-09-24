/*Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.*/


let num=Number(prompt("Digite um número: "))

function palavra(numero){
    if(numero%2==0){
        return ("Par")
    }else{
        return("Ímpar")
    }
}
console.log(palavra(num))
