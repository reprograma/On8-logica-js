function saudacao() {
    // Variável nome recebe o valor (string) do input (id="input5")
    var nome = document.getElementById("input5").value;

    // Constante saudacao recebe "Olá, " como valor
    const saudacao = "Olá, ";

    // Variável saudacaoMaisNome recebe a concatenação de saudacao + nome como valor
    var saudacaoMaisNome = saudacao + nome;

    // Função retorna um alerta com o valor de saudacaoMaisNome
    return alert(saudacaoMaisNome);
}