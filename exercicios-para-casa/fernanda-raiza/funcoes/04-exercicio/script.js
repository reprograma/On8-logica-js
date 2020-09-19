/*let anoNascimento = Number(prompt('Informe o ano de nascimento'))
if(anoNascimento < 2002) {
    console.log('é maior  de idade')
}else{
    console.log('é menor de idade')
}*/


function calcularNascimento(num){
    const anoNascimento = 2002
    if(num < anoNascimento) {
        console.log('é maior de idade')
    }else {
        console.log('é menor de idade')
    }
}
calcularNascimento(prompt('Digite ano de Nascimento com 4 dígitos'))