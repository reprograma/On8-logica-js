// [Exercício 05](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

let senha = prompt('Digite a senha.')

while (senha !== 2002) {
    senha = Number(prompt('Senha Incorreta!'))

    if(senha === 2002) {
        alert('Acesso Permitido!')
    }
}

