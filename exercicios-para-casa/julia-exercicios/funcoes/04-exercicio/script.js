function idade(anoNascimento) {
    anoNascimento = Number(prompt("Digite o ano que você nasceu: "));
  
    if (2020 - anoNascimento >= 18) {
      return "Você é maior de idade. Parabéns.";
    } else {
      return "Você é menor de idade. Que pena.";
    }
  }
  
  console.log(idade());