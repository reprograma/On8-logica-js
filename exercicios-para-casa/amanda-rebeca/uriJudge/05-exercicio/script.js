const senhaValida = "2002"
let senha = "";

do {
  senha = prompt("Digite a senha:");
  if(senha === senhaValida){
    console.log("Acesso Permitido");
  }else{
    console.log("Senha Invalida");
  }
} while (senha !== senhaValida)