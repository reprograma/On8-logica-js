let tipoAnimal = prompt('Animal vertebrado ou invertebrado?')

switch (tipoAnimal) {
    
    case 'vertebrado':
        const opcao2 = prompt('ave ou mamifero?')
        if(opcao2 == 'ave') {
            const ave = prompt('carnivora ou onivora?')
            if(ave == 'carnivora') {
                alert('RESULTADO: ÁGUIA')
            } else {
                alert('RESULTADO: POMBA')
            }
        } else if(opcao2 == 'mamifero') {
            const mamifero = prompt('onivoro ou herbi
voro?')
            if(mamifero == 'onivoro') {
                alert('RESULTADO: HOMEM')
            } else {
                alert('RESULTADO: VACA')
            }
        }
        break;

    case 'invertebrado':
        const opcao4 = prompt('inseto ou anelideo?')
        if(opcao4 == 'inseto') {
            const inseto = prompt('hematofago ou herbivoro?')
            if(inseto == 'hematofago') {
                alert('RESULTADO: PULGA')
            } else {
                alert('RESULTAD