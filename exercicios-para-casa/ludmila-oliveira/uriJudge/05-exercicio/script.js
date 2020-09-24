// [Exercício 05](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)


function validarSenha() {
    
    let validador;

    while(validador !== 2002) {

        let senha = Number(prompt("Digite sua senha numérica."));
        validador = senha

        if(senha !== 2002) {
            alert("Senha inválida")
        } if (senha == 2002) {
           break
        }
    }

    alert("Acesso permitido");
}

validarSenha();
