

/*const codigo = Number(prompt('Insira aqui o código do seu pedido'))
const quantidade = Number(prompt('Insira aqui a quantidade de itens que deseja'))


if (codigo===1){
    alert('Total: R$ ' + quantidade*4)
} else if (codigo===2){
     alert('Total: R$ ' + quantidade*4.5)
} else if (codigo===3) {
alert('Total: R$ ' + quantidade*5)
} else if (codigo===4){
 alert('Total: R$ ' + quantidade*2)
}else if (codigo===5) {
alert('Total: R$ ' + quantidade*1.5)
}else {alert("Deu ruim")}*/

let codigo
let quantidade
let preco;

switch (codigo) {
    case "1":
        preco = 4;
        break;

    case "2":
        preco = 4.5;
        break;

     case "3":
            preco = 5;
            break;

     case "4":
      preco = 2;
            break;

     case "5":
            preco = 1.5;
             break;

             default:
                alert(`código inválido`);

}
if (preco){
let quantidade = parseInt (prompt("insira a quantidade do produto"))
alert (`total: R$ ${(quantidade*preco).toFixed(2)}`)

}


