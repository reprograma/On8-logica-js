const palavraUm = prompt("Digite a primeira palavra");
const palavraDois = prompt("Digite a segunda palavra");
const palavraTres = prompt("Digite a terceira palavra");

if (
  palavraUm === "vertebrado" &&
  palavraDois === "mamifero" &&
  palavraTres === "onivoro"
) {
  console.log("homem");
} else if (
  palavraUm === "vertebrado" &&
  palavraDois === "ave" &&
  palavraTres === "carnivoro"
) {
  console.log("aguia");
} else if (
  palavraUm === "vertebrado" &&
  palavraDois === "ave" &&
  palavraTres === "carnivoro"
) {
  console.log("aguia");
} else if (
  palavraUm === "invertebrado" &&
  palavraDois === "anelideo" &&
  palavraTres === "onivoro"
) {
  console.log("minhoca");
} else {
  console.log("opção inválida");
}
