function imparOuPar() {
    // Variável numero recebe o valor (int) do input (id="input1")
    var numero = document.getElementById("input1").value;

    // Variável resto recebe do resto da divisão da variável número
    // dividida por 2
    var resto = numero % 2;

    // Condicional (if / Se) recebe que se a variável resto for igual
    // a 0, a função retorna um alerta com o valor "É par"
    if(resto == 0) {
        return alert("É par");
    }
    
    // Condicional (else / Se não) recebe que se a variável resto não for igual
    // a 0, a função retorna um alerta com o valor "É ímpar"
    else {
        return alert("É ímpar");
    }
}