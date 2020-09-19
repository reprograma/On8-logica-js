//1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.


exibirTipo(10)
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
            console.log(i,'PAR')
        else
            console.log(i,'ÍMPAR');
    }
}