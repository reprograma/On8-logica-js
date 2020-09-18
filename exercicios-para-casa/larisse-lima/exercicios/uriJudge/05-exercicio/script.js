// [Exercício 05](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

let senha;

for (let i = 0; i != 2002; i++) {
    senha = prompt("Digite a senha");

    if (senha == 2002) {
        console.log("Acesso permitido");
        break;
    } else {
        console.log("Senha incorreta");
    }
}