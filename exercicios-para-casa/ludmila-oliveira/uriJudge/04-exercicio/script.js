// - [Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

function tipoCombustivel() {

    let alcool = 0;
    let gasolina = 0;
    let diesel = 0;
    let validador;

    while (validador != 4) {
        const codigo = Number(prompt("Insira um código: 1 = alcool; 2 = gasolina; 3 = diesel; 4 = fim"));

        validador = codigo
    
        if (codigo == 1) {
            alcool += 1
        }
        if (codigo == 2) {
            gasolina += 1
        }
        if (codigo == 3) {
            diesel += 1
        }
        if (codigo >= 5) {
            alert("Código inválido, digite um número de 1-4.");
        } 
        if (codigo == 4) {
            break  // OU validador == 4
        }
    }
    console.log("MUITO OBRIGRADO \n" + "Alcool:" + alcool + "\n" + "Gasolina:" + gasolina + "\n" + "Diesel:" + diesel);
}

tipoCombustivel();