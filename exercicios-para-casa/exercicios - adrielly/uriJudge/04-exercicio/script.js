let valor;
let alcool = 0,
  gasolina = 0,
  diesel = 0,
  fim = 0;

for (let i = 0; i>=0; i++) {
  valor = prompt("Digite o código do combustivel que deseja");

  while (valor > 4) {
    console.log("Código inválido");
    valor = prompt("Digite o código do combustivel que deseja");
  }

  if (valor === "1") {
    alcool++;
  } else if (valor === "2") {
    gasolina++;
  } else if (valor === "3") {
    diesel++;
  } else if (valor === "4") {
    break;
  } else {
  }
}
console.log("MUITO OBRIGADO");
console.log("Álcool: ", alcool);
console.log("Gasolina: ", gasolina);
console.log("Diesel: ", diesel);
