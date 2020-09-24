let codigo = prompt("Digite o código do item que deseja comprar: ");
let quantidade = prompt("Digite a quantidade do item :");

switch (codigo) {
  case "1":
    console.log("Total a pagar: R$" + quantidade * 4);
    break;
  case "2":
    console.log("Total a pagar: R$" + quantidade * 4.5);
    break;
  case "3":
    console.log("Total a pagar: R$" + quantidade * 5);
    break;
  case "4":
    console.log("Total a pagar: R$" + quantidade * 2);
    break;
  case "5":
    console.log("Total a pagar: R$" + quantidade * 1.5);
    break;
  default:
    console.log("Opção inválida");
}