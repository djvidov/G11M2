var listaNumere = [
    20,
    17,
    35,
    2,
    9,
    24,
    5
]

console.log(listaNumere)

//creati o functie care sa afiseze doar numerele impare dintr-o lista
console.log("aici se afla numerele impare")
function afiseazaNumereleImpare(listaNumere) {
    for (let index = 0; index < listaNumere.length; index++) {

        if (listaNumere[index] % 2 == 1)
            console.log(listaNumere[index])
    }

}
afiseazaNumereleImpare(listaNumere)

//creati o functie care sa returneze doar numerele pare dintr-o lista

console.log("aici se afla numerele pare")
function returneazaNumerelePare(listaNumere) {
    var numerePare = ""
    for (let index = 0; index < listaNumere.length; index++) {

        if (listaNumere[index] % 2 == 0)
            numerePare = numerePare + listaNumere[index] + " "
    }
    return numerePare
}
function returneazaNumerelePare2(listaNumere) {
    var listaNumerePare = []
    for (let index = 0; index < listaNumere.length; index++) {

        if (listaNumere[index] % 2 == 0)
            listaNumerePare.push(listaNumere[index])
    }
    return listaNumerePare
}

console.log(returneazaNumerelePare(listaNumere))
console.log(returneazaNumerelePare2(listaNumere))

//creati o functie care rastuarna o lista

var l2 = [1, 3, 2, 4, 3, 5, 4, 7, 5, 6, 8, 9, 0]
function rastuarnaLista(l2) {
    var index = 0
    var indexmaxim = 12
    var temp = 1
    l2[index] = l2[indexmaxim]
    l2[indexmaxim] = temp
}
rastuarnaLista(l2)
console.log(l2)



