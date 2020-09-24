function multiplicar() {
    // Variável valor_1 recebe o valor (int) do input (id="input2_1")
    var valor_1 = document.getElementById("input2_1").value;

    // Variável valor_1 recebe o valor (int) do input (id="input2_2")
    var valor_2 = document.getElementById("input2_2").value;

    // Variável multiplicacao recebe o valor da variável valor_1 multiplicado
    // pelo valor da variável valor_2
    var multiplicacao = valor_1 * valor_2;

    // Função retorna um alerta com o valor de multiplicacao
    return alert(multiplicacao);
}