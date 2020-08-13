var listaNumere = [5, 3, 7, 21, 87, 22, 66, 45, 65]
var listaVarste = [34, 15, 23, 75, -6, 56, -43, 53, -50]



// 1. Afisati toate numerele dintr-o lista care se impart la 5 folosind continue
function afiseazaImpartireaNumerelor(lista) {
    for (let index = 0; index < lista.length; index++) {
        const numar = lista[index];
        if (numar % 5) {
            continue
        } console.log(numar)

    }
}

afiseazaImpartireaNumerelor(listaNumere)
afiseazaImpartireaNumerelor(listaVarste)

//2. Afisati toate cuvintele din lista care contin litera a folosind continue
