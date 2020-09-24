// 1. Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

// const parOuImpar = Number(prompt('Escolha um número de 1 à 10'))

// switch (parOuImpar) {
//     case (1):
//     case (3):
//     case (5):
//     case (7):
//     case (9):
//     alert('Esse número é impar!')
//     break;

//     case (2):
//     case (4):
//     case (6):
//     case (8):
//     case (10):
//     alert('Esse número é par!')
//     break;


// }

function parOuImpar() {
    numero = Number(prompt('numero'))

    if(numero % 2 === 0) {
        console.log('é par!')
    }
    else {
        console.log('é impar')
    }
}

parOuImpar();
