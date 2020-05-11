
//variabile de tip string (text)
var nume = "Ion"
var nume2 = 'Vasile'

//declararea unei variabile
// var [nume variabila]
var oras

//atribuirea valorii la o variabila
// [nume variabila] = [valoare]
oras = "Campina"
oras = nume
// oras = "rezultatul unei functii"
//alert(oras)

//declararea variabilei si atribuirea de valoare
var tara
tara = "Romania"

//declararea si atribuirea in varianta scurta
var continent = "Europa"

//variabilele de tip boolean (bool) true/false
var areNevoieDeViza = false
var areNevoieDePasaport = true
console.log("areNevoieDePasaport = " + areNevoieDePasaport)
console.log("areNevoieDeViza = " + areNevoieDeViza)

//ce putem face?
var comparaNumere = 3 > 2;
comparaNumere = 3 < 2;
comparaNumere = 3 >= 2;
comparaNumere = 3 <= 2;
comparaNumere = 3 == 2;


if (areNevoieDeViza) {
    console.log("Treci la coada de obtinut vize");
}
else {
    console.log("Treci la coada de verificat actul de identitate");
}

//operatii booleene: AND &&, OR ||, NOT !

//si
var x = areNevoieDeViza && areNevoieDePasaport
if (areNevoieDeViza && areNevoieDePasaport) {
    console.log("are nevoie si de viza si de pasaport")
}

//sau
var y = areNevoieDeViza || areNevoieDePasaport
if (areNevoieDeViza || areNevoieDePasaport) {
    console.log("are nevoie de viza sau de pasaport")
}

//negare
var z = !areNevoieDeViza
if (!areNevoieDeViza) {
    console.log('treci la verificat actul de identitate')
}

//variabilele numerice
//intregi: 1 ,5, -44, 54
//reale: 1.11, 2.54, -7.43

var varsta = 44
var inaltime = 1.71
var greutate = 80
var temperatura = -11

//operatii cu numere: +, -, *, /, % 
var suma = varsta + greutate
console.log("suma = " + suma)
var diferenta = varsta - greutate
console.log("diferenta = " + diferenta)
var produs = greutate * inaltime
console.log("produs = " + produs)
var cat = greutate / temperatura
console.log("cat = " + cat)
var rest = greutate % varsta
console.log("rest = " + rest)

//comparatii: >, <, >=, <=, == (comparatie)
if (greutate > temperatura) {
    console.log("Ar trebui sa slabesti")
}

if (inaltime < temperatura) {
    console.log(" cf ba ?")
}

if (greutate >= inaltime * varsta) {
    console.log("ar trebuii sa te lungesti")
}

if (varsta <= greutate / inaltime) {
    console.log("Yey toti avem cate o bere")
}

var a = oras + varsta //
var b = areNevoieDePasaport + greutate //
var c = nume + areNevoieDeViza //

var propozitie = "Ana are 7 mere"
var nr = parseFloat(propozitie)

var nrText = "723"
var d = greutate + nrText
nr = parseFloat(nrText)
var e = greutate + nr

nr = areNevoieDeViza
nr = propozitie
areNevoieDeViza = propozitie

//Tema: Curs
//1. creati variabilele denumireCurs, numeTrainer, numarParticipanti, durata, esteOnline, locatie, aInebunit, punctajCursant1,
// punctajCursant2, punctajCursant3, punctajCursant4, punctajCursant5, punctajCursant6
//2. dati valori variabilelor si afisatile in consola cu console.log
//3. calculati media punctajului celor 6 cursanti si afisati in consola
//4. afisati punctajul cel mai mare si cel mai mic