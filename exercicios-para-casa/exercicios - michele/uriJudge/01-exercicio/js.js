/*Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.*/

const codigo=Number(prompt("Digite o código: "))
const qtd=Number(prompt("Digite a quantidade a ser pedida: "))

let total=0

switch(codigo){

    case 1:
        total=4*qtd
        console.log("Total: R$ "+total)
        break;
     case 2:
        total=4.5*qtd
        console.log("Total: R$ "+total)
        break;
    case 3:
            total=5*qtd
            console.log("Total: R$ "+total)
            break;
    case 4:
                total=2*qtd
                console.log("Total: R$ "+total)
                break;
    case 5:
                    total=1.5*qtd
                    console.log("Total: R$ "+total)
                    break;
    }

