function checaIdade (anoNascimento) {
    let idade = 2020 - anoNascimento
    let retorno = "";

    if (idade >= 18)
        retorno = "Maior de Idade" 
    else retorno = "Menor de Idade"

    return retorno;
}

console.log(checaIdade(1987))

console.log(checaIdade(2010))