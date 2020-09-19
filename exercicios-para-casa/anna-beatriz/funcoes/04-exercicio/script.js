/*
4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
*/


function anoNascimento (num) { 
  num = Number(prompt("Digite o ano em que você nasceu:"));
  
  if (anoNascimento <= 2002) {
    return "Você é maior de idade";
  }

  else {
    return "Você é menor de idade";
  }

}
