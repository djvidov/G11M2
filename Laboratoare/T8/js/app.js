// Tema
// se da lista de jucatori
var jucatoriFotbal = [
    "Hagi",
    "Adi Mutu",
    "Dan Petrescu",
    "Dan Popescu",
    "Florin Prunea",
    "Ionut Moldovan",
    "Hagi",
    "Adi Mutu",
    "Dan Petrescu",
    "Dan Popescu",
    "Florin Prunea",
    "Ionut Moldovan"
]

var jucatoriRugby = [
    "Ionut Balaban",
    "Didi Stan",
    "Aurel Staicu",
    "Ghita Muresan"
]

var listaGagiciBune = [
    "Ioana Pecu",
    "Alex Jordan",
    "Alexa Rae"
]

// 1. Creati o functie care numara jucatorii dintr-o lista (lista de jucatori va fi parametru)
function numaraJucatori(listaJucatori) {
    for (var index = 0; index < listaJucatori.length; index++) {

    }
    return index
}

var nrJucatoriFotbal = numaraJucatori(jucatoriFotbal)
console.log(nrJucatoriFotbal)

var nrJucatoriRugby = numaraJucatori(jucatoriRugby)
console.log(nrJucatoriRugby)

var nrGagiciBobomba = numaraJucatori(listaGagiciBune)
console.log(nrGagiciBobomba)

// 2. Creati o functie care afiseaza toti jucatorii dintr-o lista (lista de jucatori va fi parametru)
function afiseazajucatori(listapersoane) {
    for (let index = 0; index < listapersoane.length; index++) {
        console.log(listapersoane[index])
    }
}
afiseazajucatori(jucatoriFotbal)
afiseazajucatori(jucatoriRugby)
afiseazajucatori(listaGagiciBune)

//Cele doua etape in procesul de utilizare a unei functii:
//1. Crearea functiei
function numeFunctie(/* lista de parametri */) {
    // Codul ce va fi executat de/in functie
}
//2. Utilizarea/Apelarea functiei
numeFunctie(/*lista de parametri */)

//tipuri de functii:
//Scopul parametrului(parametrilor)? Parametri = Inputuri (valori de intrare) => O modalitate prin care programatorul poate trimite
// informatii catre functie. Aceste informatii vin din exteriorul functiei.
//Ex: adunare(4,5)
//1. Functii fara parametri -> Functia noastra nu i-a informatii din exterior.
function afiseazaJF() {
    console.log("Am Apelat functia afiseazaJF")
    for (let index = 0; index < jucatoriFotbal.length; index++) {
        console.log(jucatoriFotbal[index])
    }
    console.log("Am Terminat functia afiseazaJF")
}

afiseazaJF()
afiseazaJF()
afiseazaJF()

//2. Functii cu parametri
function afiseazaPersoane(listaPersoane) {
    console.log("Am Apelat functia afiseazaPersoane")
    for (let index = 0; index < listaPersoane.length; index++) {
        console.log(listaPersoane[index])
    }
    console.log("Am Terminat functia afiseazaPersoane")
}

afiseazaPersoane(jucatoriFotbal)
afiseazaPersoane(jucatoriFotbal)
afiseazaPersoane(jucatoriRugby)
afiseazaPersoane(listaGagiciBune)

//tipuri de functii (dupa rezultat):
//1. Functii care nu returneaza nimic/ceva (adica nu primim nici o informatie despre rezultatul procesarii)
//Ex: afiseazaJF(), afiseazaPersoane(...)
//2. Functii care returneaza ceva (adica ne dau rezultatul procesarii astfel incat noi sa il putem folosi mai departe in codul nostru)
//Return-ul este o valoare de iesire / output
function numaraPersoane(listaPersoane) {
    console.log("Am Apelat functia numaraPersoane")
    var nrPers = 0;
    for (var index = 0; index < listaPersoane.length; index++) {
        nrPers++
    }
    console.log("Am Terminat functia numaraPersoane")
    return nrPers
}

var nrJF = numaraPersoane(jucatoriFotbal)

console.log("NrJF = " + nrJF)
// 3. Creati o functie care sorteaza in ordine crescatoare jucatorii dintr-o lista (lista de jucatori va fi parametru) va returna o lista sortata
// 4. folositi cele 3 functiii pentru ambele liste de jucatori 

//Tema
// 2. Creati o functie care sa calculeze aria cercului si sa returneze rezultatul
// 3. Creati o functie care sa calculeze si sa afiseze perimetrul cercului
// 4. Creati o functie care sa calculeze volumul unei piscine (L, l, I) si sa returneze rezultatul
// 1. De terminat punctele 3 si 4 de mai sus



var listaNumere = [
    20,
    17,
    35,
    2,
    9,
    24,
    5
]

function ordoneazaNumereCrescator(listaNumere) {
    for (let index = 0; index < listaNumere.length; index++) {
        if (listaNumere[index] > listaNumere[index + 1]) {
            var temp = listaNumere[index + 1]
            listaNumere[index + 1] = listaNumere[index]
            listaNumere[index] = temp

        }

    }
    return listaNumere
}
var numereOrdonateCrescator = ordoneazaNumereCrescator(listaNumere)
console.log(numereOrdonateCrescator)
console.log(listaNumere)

// 3. Creati o functie care sorteaza in ordine crescatoare jucatorii dintr-o lista (lista de jucatori va fi parametru) va returna o lista sortata

var l2 = [1, 3, 2, 4, 3, 5, 4, 7, 5, 6, 8, 9, 0]
// Teme
// 1. sa creati o functie care sa afiseze doar numerele impare dintr-o lista
// 2. Sa creati o functie care sa returneze doar numerele pare dintr-o lista
// 3. Sa rasturnati o lista ( primul element devine ultimul , ultimul element devine primul, etc)
