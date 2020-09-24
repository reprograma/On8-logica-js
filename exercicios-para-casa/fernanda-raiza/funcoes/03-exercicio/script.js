
function calcular(num){
    const calcularDesconto = num * 0.050;
    const novoValor = num - calcularDesconto;
    console.log(calcularDesconto)
    console.log(novoValor)
}
calcular(prompt())