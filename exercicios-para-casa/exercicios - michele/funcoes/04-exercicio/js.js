/*  Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.  */

const ano=Number(prompt("Informe seu ano de nascimento: "))
let idade=0

function pessoa(valor){
    idade=2020-valor
    if(idade>=18){
        return("Você é maior de idade! Sua idade é: "+idade+" anos")
    }else{
        return( "Você ainda é menor de idade! Sua idade é: "+idade+" anos")
    }
}

console.log(pessoa(ano))