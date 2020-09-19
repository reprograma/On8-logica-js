const nome1=prompt("Digite a primeira palavra  para definir o tipo de animal")
const nome2=prompt("Digite a segunda palavra  para definir o tipo de animal")
const nome3=prompt("Digite a terceira palavra para definir o tipo de animal")

if (nome1==='vertebrado'){
    if(nome2==='ave'){
        if(nome3==='carnivoro'){
            console.log("aguia")
        }else{
            console.log("pomba")
        }
    }else{
        if(nome3==='onivoro'){
            console.log("homem")
        }else{
            console.log("vaca")
        }
    }

}else{
    if(nome2==='inseto'){
        if(nome3==='hematofago'){
            console.log("pulga")
        }else{
            console.log("largata")
        }
    }else{
        if(nome3==='hematofago'){
            console.log("sanguessuga")
        }else{
            console.log("minhoca")

        }
    }

}