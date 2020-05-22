function adunare(a, b, c) {
    var suma = a + b + c
    return suma
}
pahar = adunare(15, 20, 35)

alert(pahar)

function inmultire(a, b, c) {
    var produs = a * b * c
    return produs
}
pahar = inmultire(20, 25, 30)

alert(pahar)

function scadere(a, b) {
    var diferenta = a - b
    return diferenta
}
pahar = scadere(2000, 999)

alert(pahar)
//de la punctul 4 in jos

//primul subpunct
function inmultire(a, b, c) {
    var rezultat1 = a * b * c
    return rezultat1
}
pahar = inmultire(5, 2, 3)
inlocuitor = pahar

function adunare(inlocuitor, b, c) {
    var rezultat2 = inlocuitor + b + c
    return rezultat2
}
pahar = adunare(inlocuitor, 3, 4)
alert(pahar)
//subpunctul 2
function adunare(a, b, c) {
    var rezultat3 = a + b + c
    return rezultat3
}

pahar = adunare(3, 4, 5)
var inlocuitorpahar = pahar

function inmultire(pahar, b, c) {
    var rezultat4 = pahar * b * c
    return rezultat4
}
pahar = inmultire(inlocuitorpahar, 2, 3)
alert(pahar)

//subpuntul 3

function inmultire(a, b, c) {
    var rezultat5 = a * b * c
    return rezultat5
}
pahar = inmultire(-2, 2, 5)
inlocu = pahar

function scadere(b, inlocu) {
    var rezultat6 = b - inlocu
    return rezultat6
}
pahar = scadere(5, inlocu)
alert(pahar)
//subpunctul 4

function scadere(a, b) {
    var rezultat8 = a - b
    return rezultat8
}
pahar = scadere(5, 2)
inloc = pahar

function inmultire(inloc, b, c) {
    var rezultat7 = inloc * b * c
    return rezultat7
}
pahar = inmultire(inloc, 2, 5)
alert(pahar)

