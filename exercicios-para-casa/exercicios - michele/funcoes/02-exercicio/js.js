/* Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles. */

const n1=Number(prompt("Digite o primeiro número: "))
const n2=Number(prompt("Digite o primeiro número: "))

function multiplicacao( valor1,valor2){
    const total=valor1*valor2
    return (total)
}
console.log("A multiplicação dos números é: "+ multiplicacao( n1,n2))