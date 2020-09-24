let caracteristica1 = prompt("Qual a primeira caracteristica?");
let caracteristica2 = prompt("Qual a segunda caracteristica?");
let caracteristica3 = prompt("Qual a terceira caracteristica?");

if (caracteristica1 === "vertebrado") {
    if (caracteristica2 === "ave") {
        if (caracteristica3 === "carnivoro") {
            console.log("aguia");
        } else if (caracteristica3 === "onivoro") {
            console.log("pomba");
        }
    } else if (caracteristica2 === "mamifero") {
        if (caracteristica3 === "onivoro") {
            console.log("homem");
        } else if (caracteristica1 === "herbivoro") {
            console.log("vaca");
        }
    }
} else if (caracteristica1 === "invertebrado") {
    if (caracteristica2 === "inseto") {
        if (caracteristica3 === "hematofago") {
            console.log("pulga");
        } else if (caracteristica1 === "herbivoro") {
            console.log("lagarta");
        }
    } else {
        if (caracteristica3 === "hematofago") {
            console.log("sanguessuga");
        } else if (caracteristica3 === "onivoro") {
            console.log("minhoca");
        }
    }
}