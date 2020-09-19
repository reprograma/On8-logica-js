function desconto(valor) {
    valor = prompt("Digite um valor");
    let valorDesconto = 0.05 * valor;
    alert("O valor de desconto é: $" + valorDesconto);
}

desconto();