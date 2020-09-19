function idade(anoNascimento) {
    anoNascimento = Number(prompt("Digite o ano em que você nasceu: "));
  
    if (2020 - anoNascimento >= 18) {
      return "Você já é maior de idade";
    } else {
      return "Você é menor de idade";
    }
  }
  console.log(idade());