let x = 0
let alcool = 0
let gasolina = 0
let diesel = 0
while ( x < 4 || x > 4) {
    let x = Number(prompt('Insira o tipo de combustivel que voce prefere'))
    switch (x) {
        case x == 1:
            alcool += 1
            break;
        case x == 2:
            gasolina += 1
            break;
        case x == 3:
            diesel += 1
            break;
        defaut :
        console.log('MUITO OBRIGADO', alcool, gasolina, diesel)
    }
}
