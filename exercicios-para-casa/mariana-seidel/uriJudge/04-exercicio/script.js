let codigo
let alcool=0
let gasolina=0
let diesel=0

while (codigo!== 4){
    codigo = Number(prompt('Insira aqui o código do combustível'))

    switch (codigo){
        case 1:
            alcool++
            break;
        case 2:
            gasolina++
            break;
        case 3:
            diesel++
            break;
        case 4:
            alert(`Muito obrigada!\nÁlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)
            break;     
    }

    if (codigo>4){
        prompt('Código inválido. Insira outro valor')
    } else if (codigo===4){alert(`Muito obrigada!\nÁlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)}
}
 
