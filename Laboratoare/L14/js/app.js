
//4. Cautati numarul x intr-o lista random
//4.1 Cautati numarul x intr-o lista ordonata descrescator
//4.2 Cautati numarul x intr-o lista ordonata crescator


var ListaNumere = [1, 3, 4, 5, 6, 8, 9]
var listaDubioasa = [1, 10, 100, 1000, 10000, 11000, 12000, 13000]

function cautaNumar(lista, numarCautat) {
    var GI = 0
    var GS = lista.length - 1

    for (let index = 0; index < lista.length; index++) {
        var pozMijlocLista = Math.floor((GI + GS) / 2)
        var valMijlocLista = lista[pozMijlocLista]
        if (valMijlocLista == numarCautat) {
            console.log("numar cautat este pe pozitia" + pozMijlocLista)
            break
        }
        else if (valMijlocLista < numarCautat) {

            GI = pozMijlocLista
        }
        else {
            GS = pozMijlocLista
        }
    }
}

cautaNumar(ListaNumere, 3)

var nume1 = "ana"
var nume2 = "maria"
var text = "abccba"
nume1[0]
nume1[nume1.length - 1]


//5. Afizati pentru fiecare variabila daca textul este palindrom
function suntPalindroame(textOriginal, textInversat) {
    if (textOriginal == textInversat) {
        return true
    }
    return false
}

if (suntPalindroame("ana", "ana")) {
    console.log("ana este un cuvant palindrom")
}
else {
    console.log("ana nu este un cuvant palindrom")
}
if (suntPalindroame("nana", "anan")) {
    console.log("nana este un cuvant palindrom")
}
else {
    console.log("nana nu este un cuvant palindrom")
}

var ePalindrom = suntPalindroame("ana", "ana")
if (ePalindrom) {
    console.log("ana este un cuvant palindrom")
}
else {
    console.log("ana nu este un cuvant palindrom")
}

ePalindrom = suntPalindroame("nana", "anan")
if (ePalindrom) {
    console.log("nana este un cuvant palindrom")
}
else {
    console.log("nana nu este un cuvant palindrom")
}

// i: iterator
//s1: initierea
//s2: conditionarea
//s3: incrementarea
for (var i = 0; i < 10; i++) {

}