 if ( codigo == 1) {
let codigo = Number(prompt('Digite o codigo do item:'))
let quantidade = Number(prompt('Digite quantos produtos você pediu:'))

    valor = quantidade * 4.00
    console.log("Total: R$", valor.toFixed(2))
} else if (codigo == 2 ){
    valor = quantidade * 4.50
    console.log("Total: R$", valor.toFixed(2))
} else if (codigo == 3 ){
    valor = quantidade * 5.00
    console.log("Total: R$", valor.toFixed(2))
} else if (codigo == 4 ){
    valor = quantidade * 2.00
    console.log("Total: R$", valor.toFixed(2))
}
else{ valor = quantidade * 1.50
    console.log("Total: R$", valor.toFixed(2))} 
