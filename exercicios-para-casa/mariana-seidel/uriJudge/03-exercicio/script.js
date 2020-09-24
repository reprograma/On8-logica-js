let numero;
let numeroPar=0;
let numeroImpar=0;
let numeroPositivo=0;
let numeroNegativo=0;

for (i=0; i<5; i++){
    numero = Number(prompt('Insira aqui um número inteiro'))

    if (numero % 2 ==0){
        numeroPar++
    } else {
        numeroImpar++
    }
    
    if (numero > 0){
        numeroPositivo++
    } else if (numero < 0) {
        numeroNegativo++
    }
}

alert(`${numeroPar} valor(es) par(es)\n${numeroImpar} valor(es) ímpar(es)\n${numeroPositivo} valor(es) positivo(s)\n${numeroNegativo} valor(es) negativo(s)`)

