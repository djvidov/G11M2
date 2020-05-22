function adunare(a, b, c) {
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

pahar = adunare(15, 20, 35)

alert(pahar)

pahar = inmultire(20, 25, 30)

alert(pahar)

pahar = scadere(2000, 999)

alert(pahar)
//de la punctul 4 in jos

//primul subpunct
pahar = inmultire(5, 2, 3)
inlocuitor = pahar

pahar = adunare(inlocuitor, 3, 4)
alert(pahar)
//subpunctul 2

pahar = adunare(3, 4, 5)
var inlocuitorpahar = pahar

pahar = inmultire(inlocuitorpahar, 2, 3)
alert(pahar)

//subpuntul 3


pahar = inmultire(2, 2, 5)
inlocu = pahar



pahar = scadere(5, inlocu)
alert(pahar)
//subpunctul 4



pahar = scadere(5, 2)
inloc = pahar


pahar = inmultire(inloc, 2, 5)
alert(pahar)

