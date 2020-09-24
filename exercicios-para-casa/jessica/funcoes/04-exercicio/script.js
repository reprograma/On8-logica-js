function idade() {
    // Variável idade recebe o valor (int) do input (id="input4")
    var idade = document.getElementById("input4").value;

    // Condicional (if / Se) recebe que se a variável idade for maior ou igual
    // a 18, a função retorna um alerta com o valor "Você é maior de idade"
    if (idade >= 18) {
        return alert('Você é maior de idade')
    }
    
    // Condicional (else / Se não) recebe que se a variável idade não for maior
    // ou igual a 18, a função retorna um alerta com o valor "Você é menor de idade"
    else {
        return alert('Você é menor de idade')
    }
}