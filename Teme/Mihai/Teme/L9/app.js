//primul subpunct , Aria

var razaCercului = 6

function calculeazaAriaCercului(raza) {
    var arie = (raza * raza * Math.PI)
    return arie
}
var arie = calculeazaAriaCercului(razaCercului)
console.log("acesta este aria crecului " + arie)

//Al doilea subpunct , Perimetru 

function calculeazaPerimetrulCercului(raza) {
    var perimetru = (2 * raza * Math.PI)
    return perimetru
}
var perimetru = calculeazaPerimetrulCercului(razaCercului)
console.log("acesta este perimetrul cercului " + perimetru)

//Al treilea subpunct , Volumul Piscinei

var lungime = 20
var inaltime = 2
var latime = 10
function calculeazaVolumulPiscinei(L, l, h) {
    var volum = (L * l * h)
    return volum
}
var volum = calculeazaVolumulPiscinei(lungime, latime, inaltime)
console.log("acesta este volumul piscinei " + volum)

//Calculati cati litri de apa intra in piscina

function calculeazaLitri(volum) {
    var litri = (volum * 1000)
    return litri
}
var litri = calculeazaLitri(volum)
console.log("Atati litri incap in piscina " + litri)