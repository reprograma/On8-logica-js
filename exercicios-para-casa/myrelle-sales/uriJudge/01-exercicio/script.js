let item1 = 4;
let item2 =4.5;
let item3 = 5;
let item4 = 2;
let item5 = 1.5;

let quantidade;
let valorTotal;

function lerCodigo(codigo, quantidade){
if(codigo === item1){
valorTotal = 4 * quantidade;
return valorTotal;
}else if(codigo === item2){
valorTotal = 4.5 * quantidade;
return valorTotal;
}else if(codigo === item3){
valorTotal = 5 * quantidade;
return valorTotal;
}else if(codigo === item4){
valorTotal = 2 * quantidade;
return valorTotal;
}else if(codigo === item5){
valorTotal = 1.5 * quantidade;
return valorTotal;
}else{
  return "Escolha uma opção entre 1 e 5"
}


let mensagem = "Total: R$" ${valorTotal};
alert("mensagem");
}