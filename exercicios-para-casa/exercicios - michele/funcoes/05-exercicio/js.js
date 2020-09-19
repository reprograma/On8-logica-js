/*Crie uma função que receba um nome e retorne uma saudação na forma de uma string.
 `Exemplo: "Olá, Natália"`*/

 const nome=prompt("Digite seu nome: ")

 function saudacao(string){
     return ("'"+"Olá, "+string+"'")
 }

 console.log(saudacao(nome))