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
alert(nrJucatoriFotbal)

var nrJucatoriRugby = numaraJucatori(jucatoriRugby)
alert(nrJucatoriRugby)

var nrGagiciBobomba = numaraJucatori(listaGagiciBune)
alert(nrGagiciBobomba)

// 2. Creati o functie care afiseaza toti jucatorii dintr-o lista (lista de jucatori va fi parametru)
function afiseazaJucatori(listaJucatori) {
    for (let index = 0; index < listaJucatori.length; index++) {


    }
}
console.log(afiseazaJucatori(jucatoriFotbal))

// 3. Creati o functie care sorteaza in ordine crescatoare jucatorii dintr-o lista (lista de jucatori va fi parametru) va returna o lista sortata
// 4. folositi cele 3 functiii pentru ambele liste de jucatori 