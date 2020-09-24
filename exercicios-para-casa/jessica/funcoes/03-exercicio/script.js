function desconto() {
    // Variável total recebe o valor (int) do input (id="input3")
    var total = document.getElementById("input3").value;

    // Variável desconto recebe o valor da variável total dividido por 20, ou
    // seja, variável desconto recebe 5% do valor da variável total
    var desconto = total / 20;

    // Função retorna um alerta com o valor de desconto
    return alert(desconto);
}