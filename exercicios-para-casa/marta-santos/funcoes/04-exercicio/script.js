// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor

function idade (anoNascimento){
    let idade = 2020 - anoNascimento
    let return = ""

    if (idade >= 18){
        return "maior de idade"
    }
            
      else {
        return = "menor de idade"
      }
}

console.log(idade (1989))

console.log(idade(2015))
