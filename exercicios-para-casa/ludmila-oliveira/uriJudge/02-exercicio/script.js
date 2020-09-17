// https://www.urionlinejudge.com.br/judge/pt/problems/view/10497

function qualAnimal(a) {

    if (a == "vertebrado") {
        const b = prompt("Se você escolheu vertebrado, o animal é ave ou mamifero?");

        if (b == "ave") {
            const c = prompt("O animal é carnivoro ou onivoro?");

            if (c == "carnivoro") {
                console.log("aguia");
            } else if (c == "oninivoro"){
                console.log("pomba");
            } else {
                console.log("Opção inválida.");
            }

        } else if (b == "mamifero"){
            const c = prompt("O animal é herbivoro ou onivoro?");

            if (c == "onivoro") {
                console.log("homem");
            } else if (c == "herbivoro"){
                console.log("vaca");
            } else {
                console.log("Opção inválida.");
            }

        } else {
            console.log("Opção inválida.");
        }

    } else if (a == "invertebrado"){
        const b = prompt("Se você escolheu invertebrado, o animal é inseto ou anelideo?");

        if (b == "inseto") {
            const c = prompt("O animal é hematofago ou herbivoro?");

            if (c == "hematofago") {
                console.log("pulga");
            } else if (c == "herbivoro") {
                console.log("lagarta");
            } else {
                console.log("Opção inválida.");
            }

        } else if(b == "anelideo") {
            const c = prompt("O animal é hematofago ou onivoro?");

            if (c == "hematofago") {
                console.log("sanguessuga");
            } else if(c == "onivoro") {
                console.log("minhoca");
            } else {
                console.log("Opção inválida.");
            } 
        } else {
            console.log("Opção inválida.");
        }

    } else {
        console.log("Opção inválida.");
    }
}


const categoria1 = prompt("O animal é vertebrado ou invertebrado?");

qualAnimal(categoria1);