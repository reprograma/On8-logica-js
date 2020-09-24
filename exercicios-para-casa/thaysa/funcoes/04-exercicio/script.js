function anoDeNascimento(ano) {
  ano = prompt("Digite o ano que você nasceu");
  if(ano <= 2002) {
      alert("Você é maior de idade");
  } else {
      alert("Você é menor de idade");
  }
}

anoDeNascimento();