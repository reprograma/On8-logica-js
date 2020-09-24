let cordado = prompt ('O animal escolhido é vertebrado ou invertebrado?')
let animal = prompt ('O animal é ave, mamifero, inseto ou anelideo?')
let dieta = prompt ('Ele é carnivoro, onivoro, herbivoro ou hematofago?')

if (cordado == 'vertebrado'){
    animal == 'ave' || 'mamifero'
    if (animal == 'ave'){
        dieta == 'carnivoro' || 'onivoro'
        if (dieta == 'carnivoro' ){
            console.log("aguia")
        }
        else if (dieta == 'onivoro'){
            console.log("pomba")
        }
    }
    else{
        dieta == 'herbivoro' || 'onivoro'
        if (dieta == 'herbivoro' ){
            console.log("vaca")
        }
        else if (dieta == 'onivoro'){
            console.log("homem")
        }
    }
}
else if (cordado == 'invertebrado') {
    animal == 'inseto' || 'anelideo'
    if (animal == 'anelideo'){
        dieta == 'hematofago' || 'onivoro'
        if (dieta == 'hematofago' ){
            console.log("sanguessuga")
        }
        else if (dieta == 'onivoro'){
            console.log("minhoca")
        }
    }
    else{
        dieta == 'herbivoro' || 'hematofago'
        if (dieta == 'herbivoro' ){
            console.log("lagarta")
        }
        else if (dieta == 'hematofago'){
            console.log("pulga")
        }
    }
}