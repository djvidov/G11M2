2.// Creati o functie care sa calculeze aria cercului si sa returneze rezultatul
function calculeazaAriaCerc(r) {
    var arie = Math.PI * r * r
    return arie
}
var arieCerc = calculeazaAriaCerc(3)
console.log("Aria cercului este " + arieCerc)

// 3. Creati o functie care sa calculeze si sa afiseze perimetrul cercului

function calculeazaPerimetrulCercului(r) {
    var perimetru = 2 * Math.PI * r
    return perimetru
}

var perimetru = calculeazaPerimetrulCercului(3)
console.log("Perimetrul cercului este " + perimetru)

// 4. Creati o functie care sa calculeze volumul unei piscine (L, l, I) si sa returneze rezultatul
function calculeazaVolumPiscina(lungime, latime, inaltime) {
    var volum = lungime * latime * inaltime
    return volum
}

var volumPiscina = calculeazaVolumPiscina(14, 5, 4)
console.log("Volumul piscinei este " + volumPiscina)

//Calculeaza cati metrii de apa intra in piscina
function calculeazaLitrii(volumPiscina) {
    var litrii = volumPiscina * 1000
    return litrii
}
var litriiPiscina = (calculeazaLitrii(volumPiscina))
console.log("Litrii de apa in piscina " + litriiPiscina)

//Volumul unui cilindru cu raza= 3 si inaltime = 6

function calculeazaVolumulCilindrului(arie, h) {
    var volum = arie * h
    return volum
}

function calculeazaVolumCilindru(r, h) {
    var arie = calculeazaAriaCerc(r)
    var volum = arie * h
    return volum
}

var volumCilindru = calculeazaVolumulCilindrului(arieCerc, 6)
console.log("Volumul cilindrului este " + volumCilindru)

// Calculare volum cilindru cu r= 4 si h=8
var arieDe4 = calculeazaAriaCerc(4)
var volumCilindru2 = (arieDe4, 8)
console.log("Volum cilindru cu r de 4 este " + volumCilindru2)

volumCilindru2 = calculeazaVolumCilindru(4, 8)
console.log("Volum cilindru cu r de 4 este " + volumCilindru2)
