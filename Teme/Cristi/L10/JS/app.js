
var listaNumere = [
    20,
    17,
    35,
    2,
    9,
    24,
    5
]



function inverseazaLista(lista) {
    var listaNumereInversate = []
    for (var index = lista.length - 1; index >= 0; index--) {
        listaNumereInversate.push(lista[index])
    }
    return listaNumereInversate
}

console.log(inverseazaLista(listaNumere))

function inverseazaLista2(lista) {
    var tmp = ""
    for (let index = 0; index < lista.length / 2; index++) {
        var elCurentMic = lista[index] //pe prima iteratie luam primul element
        var elCurentMare = lista[lista.length - index - 1] // pe prima iteratie luam ultimul element

        //inversam elementele din lista
        tmp = lista[index]
        lista[index] = lista[lista.length - index - 1]
        lista[lista.length - index - 1] = tmp
    }
    return lista
}

console.log(inverseazaLista2(listaNumere))

// 1. Afisati suma numerelor dintr-o lista
// 2. Returnati difeferenta numerelor dintr-o lista
// 3. Returnati inmultirea numerelor dintr-o lista
// 4. Uitati-va si amintiti-va algoritmul de calcul al cmmdc-ului din M1