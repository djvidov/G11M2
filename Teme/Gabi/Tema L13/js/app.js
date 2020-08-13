

var listaNumereOrdonateCrescator = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var listaNumereOrdonateDescrescator = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
var listaNumere = [5, 3, 7, 21, 87, 22, 66]
var listaVarste = [34, 15, 23, 75, -6, 56, -43, 53]


//3.1 Cel mai mic numar dintr-o lista ordonata crescator
function afiseazaCelMaiMicNumarDinListaCrescatoare(lista) {
    var celMaiMicNumar = lista[0]
    console.log("Cel mai mic numar dintr-o lista ordonata crescator este " + celMaiMicNumar)
}
afiseazaCelMaiMicNumarDinListaCrescatoare(listaNumereOrdonateCrescator)

//3.2 Cel mai mic numar dintr-o lista ordonata descrescator
function afiseazaCelMaiMicNumarDinListaDescrescatoare(lista) {
    var celMaiMicNumar = lista[lista.length - 1]
    console.log("Cel mai mic numar dintr-o lista ordonata descrescator este " + celMaiMicNumar)

}
afiseazaCelMaiMicNumarDinListaDescrescatoare(listaNumereOrdonateDescrescator)

//4. Cautati numarul x intr-o lista random
function cautaNumar(lista, numarCautat) {
    var numarGasit = false
    for (let index = 0; index < lista.length; index++) {
        var numar = lista[index];
        if (numar == numarCautat) {
            console.log("Numarul cautat este " + numar)
            numarGasit = true
            break
        }
    }
    return numarGasit
}
var afiseazaNumar = cautaNumar(listaNumere, 66)
console.log(afiseazaNumar)
cautaNumar(listaNumere, 66)
//4.1 Cautati numarul x intr-o lista ordonata descrescator





//4.2 Cautati numarul x intr-o lista ordonata crescator



var nume1 = "ana"
var nume2 = "maria"
var text = "abccba"
nume1[0]
nume1[nume1.length - 1]
5. //Afizati pentru fiecare variabila daca textul este palindrom

