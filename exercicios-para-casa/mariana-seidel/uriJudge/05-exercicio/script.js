let senha = prompt('Insira aqui a sua senha')

while (senha!== 2002){
    senha = Number(prompt('Senha inválida'))

    if (senha===2002){
        alert('Acesso permitido')
    }
}
