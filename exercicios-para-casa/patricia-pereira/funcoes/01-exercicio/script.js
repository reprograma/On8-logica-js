/* 1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
*/
function retornaImparPar(num){
    const verificarNumero = num % 2;

    if(verificarNumero===0){
        console.log("O número é par")
    } else{
        console.log("O número é impar")
    }
}

retornaImparPar(38)