/*4. Crie uma função que recebe o ano de nascimento da pessoa informando se ela 
é maior de idade ou menor.*/

function verificarIdade(anoDeNascimento){
    const anoMaiorIdade = 2002;
    if(anoDeNascimento >= anoMaiorIdade) {
        console.log("Você é menor de idade")
    } else{
        console.log("Você é maior de idade")
    }
}

 verificarIdade(1985)   