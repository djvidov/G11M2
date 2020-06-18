
function adunare(a, b, c, ) {
    var suma = a + b + c
    return suma
}
function inmulteste(d, e, f) {
    var inmultire = d * e * f
    return inmultire
}
function scadere(g, h) {
    var diferenta = g - h
    return diferenta

}
//  3 + 4 + 5 * 2 * 3
var produs = inmulteste(5, 2, 3)
var suma = adunare(3, 4, produs)
alert(`Raspunsul este ${suma}`)

//  (3 + 4 + 5) * 2 * 3
var adunare2 = adunare(3, 4, 5)
var produs2 = inmulteste(adunare2, 2, 3)
alert(`Raspunsul este ${produs2}`)

//  5 - 2 * 2 * 5
var produs3 = inmulteste(2, 2, 5)
var diferenta3 = scadere(5, produs3)
alert(`Raspunsul este ${diferenta3}`)

//  (5 - 2) * 2 * 5
var scadere4 = scadere(5 - 2)
var produs4 = inmulteste(scadere4, 2, 5)
alert(`Raspunsul este + ${produs}`)