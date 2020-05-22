//alert("Neata")

function adunare(a, b, c) {
    console.log(a, b, c)
    var suma = a + b + c
    return suma
}

function inmultire(a, b, c) {
    var produs = a * b * c
    return produs
}

function scadere(a, b) {
    var diferenta = a - b
    return diferenta
}

//  3 + 4 + 5 * 2 * 3
var rezultat = inmultire(5, 2, 3)
var rezultat1 = adunare(3, 4, rezultat)
console.log(rezultat1)

var primulCalcul = adunare(3, 4, inmultire(5, 2, 3))
console.log("primulCalcul = " + primulCalcul)

//  (3 + 4 + 5) * 2 * 3
var calcul = adunare(3, 4, 5)
var calcul2 = inmultire(calcul, 2, 3)
console.log(`Al doilea calcul este ${calcul2}`)
//  5 - 2 * 2 * 5
var calcul3 = scadere(5, inmultire(2, 2, 5))
console.log(`Al treilea calcul este ${calcul3}`)
//  (5 - 2) * 2 * 5
var calcul4 = inmultire(scadere(5, 2), 2, 5)
console.log(`Al patrulea rezultat este ${calcul4}`)

// Tema
// !(Vacanta placuta !)
// se da lista de jucatori
var jucatoriFotbal = [
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

// 1. Creati o functie care numara jucatorii dintr-o lista (lista de jucatori va fi parametru)
// 2. Creati o functie care afiseaza toti jucatorii dintr-o lista (lista de jucatori va fi parametru)
// 3. Creati o functie care sorteaza in ordine crescatoare jucatorii dintr-o lista (lista de jucatori va fi parametru) va returna o lista sortata
// 4. folositi cele 3 functiii pentru ambele liste de jucatori 




















function inmultireSimplificata(a, b, c) {
    return a * b * c
}

var primaInmultire = inmultire(2, 3, 4)
var aDouaInmultire = inmultireSimplificata(2, 3, 4)
//console.log(produs)
console.log("primaInmultire = " + primaInmultire)
console.log("aDouaInmultire = " + aDouaInmultire)

var pahar = adunare(23, 43, 54)
console.log(pahar)
pahar = adunare(44, 33, 22)
console.log(pahar)
pahar = adunare(14, 33, 22)
console.log(pahar)
pahar = adunare(24, 33, 22)
console.log(pahar)
pahar = adunare(34, 33, 22)
console.log(pahar)
pahar = adunare(54, 33, 22)
console.log(pahar)
pahar = adunare(64, 33, 22)
console.log(pahar)
pahar = adunare(74, 33, 22)
console.log(pahar)
pahar = adunare(84, 33, 22)
console.log(pahar)
pahar = adunare(94, 33, 22)
console.log(pahar)

// a, b si ce sunt not defined pentru ca parametrii a, b si c sunt vizibili doar in interiorul functiei in care i-am declarat
// console.log("a=" + a, "b=" + b, "c=" + c)
