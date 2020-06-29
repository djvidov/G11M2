//1. CMMDC
var a = 0
var b = 0
var c = 0
a = 124
b = 52

if (a > b) {
    calculeazaCMMDC(a, b)
}
else {
    calculeazaCMMDC(b, a)
}

function calculeazaCMMDC(a, b) {
    do {
        c = a % b
        if (c != 0) {
            a = b
            b = c
        }
    } while (c != 0)
    console.log(b + " este cmmdc")
}

var listaNumere = [5, 3, 7, 21, 87, 22, 66]
var listaVarste = [34, 15, 23, 75, -6, 56, -43, 53]

//index++ => index = index + 1
//2. Cel mai mare numar dintr-o lista random
function aflaCelMaiMareNumar(lista) {
    var celMaiMareNumar = lista[0]
    for (let index = 1; index < lista.length; index++) {
        if (celMaiMareNumar < lista[index])
            celMaiMareNumar = lista[index]
    }
    console.log(celMaiMareNumar)
}
aflaCelMaiMareNumar(listaNumere)
aflaCelMaiMareNumar(listaVarste)

//2.1 Cel mai mare numar dintr-o lista ordonata crescator
var listaNumereOrdonateCrescator = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var celMaiMareNr = listaNumereOrdonateCrescator[listaNumereOrdonateCrescator.length - 1]
console.log(`Cel mai mare nr este ${celMaiMareNr}`)

//2.2 Cel mai mare numar dintr-o lista ordonata descrescator
var listaNumereOrdonateDescrescator = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
celMaiMareNr = listaNumereOrdonateDescrescator[0]
console.log(`Cel mai mare nr este ${celMaiMareNr}`)

//3. Cel mai mic numar dintr-o lista random
function afiseazaCelMaiMicNumar(lista) {
    var numarMic = lista[0]
    for (let index = 0; index < lista.length; index++) {
        if (numarMic > lista[index + 1]) {
            numarMic = lista[index + 1]
        }
    }
    console.log(numarMic)
}
afiseazaCelMaiMicNumar(listaNumere)
afiseazaCelMaiMicNumar(listaVarste)

//3.1 Cel mai mic numar dintr-o lista ordonata crescator
//3.2 Cel mai mic numar dintr-o lista ordonata descrescator

//4. Cautati numarul x intr-o lista random
//4.1 Cautati numarul x intr-o lista ordonata descrescator
//4.2 Cautati numarul x intr-o lista ordonata crescator

var nume1 = "ana"
var nume2 = "maria"
var text = "abccba"
nume1[0]
nume1[nume1.length - 1]
//5. Afizati pentru fiecare variabila daca textul este palindrom


