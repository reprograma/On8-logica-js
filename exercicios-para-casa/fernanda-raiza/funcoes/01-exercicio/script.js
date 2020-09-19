
function retornaImparPar(num){
    const verificarNumero = num % 2;

    if(verificarNumero === 0) {
        console.log('O número é par')
    }else {
        console.log('O número é impar')
    }
}

retornaImparPar(prompt())





