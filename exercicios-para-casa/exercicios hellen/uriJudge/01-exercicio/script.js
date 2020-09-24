// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.
//O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.
//O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

let lanche = prompt('Digite o código do seu lanche');
let quantidade = prompt ('Digite a quantidade do seu lanche');

    
    if(lanche === 1) {
        console.log('Total: R$ ', quantidade*4.00);
    }
    else if(lanche === 2){
        console.log('Total: R$ ', quantidade*4.50);
    }
    else if (lanche === 3) {
        console.log('Total: R$ ', quantidade*5.00);
    }
    else if (lanche === 4) {
        console.log('Total: R$ ', quantidade*2.00);
    }
    else if (lanche === 5) {
        console.log('Total: R$ ', quantidade*1.50);
    }
    