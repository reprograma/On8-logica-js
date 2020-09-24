let alcool = 0;
let gasolina = 0;
let diesel = 0;
let codigo;

do {
    codigo = Number(prompt("Digite o código do tipo de combustível"));
    switch (codigo) {
        case 1:
            alcool++;
            break;
        case 2:
            gasolina++;
            break;
        case 3:
            diesel++;
            break;
    }
} while (codigo !== 4)

console.log("MUITO OBRIGADA");
console.log("Álcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);