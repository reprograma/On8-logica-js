function validarSenha() {

    let val;

    while(val!== 2002) {

        let senha = Number(prompt("Digite a sua senha numérica:"));
        val = senha

        if(senha !== 2002) {
            alert("Senha inválida ! ")
        } if (senha == 2002) {
           break
        }
    }

    alert("Acesso liberado.");
}

validarSenha();