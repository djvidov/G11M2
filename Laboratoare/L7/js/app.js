//alert('neata')

function zdrobitor(struguri) {
    console.log('zdrobeste ' + struguri)
    return "suc de " + struguri
}

function selector(sucDeStruguri) {
    console.log('se aleg betele si pielita din ' + sucDeStruguri)
    return "suc curat de " + sucDeStruguri
}

function fermetare(sucCuratDeStruguri) {
    console.log('se fermenteaza ')
    return "vin din " + sucCuratDeStruguri
}

var galeata
var damigeana
var struguriCeasla = "struguri ceasla"

galeata = zdrobitor(struguriCeasla)
console.log(galeata)
damigeana = selector(galeata)
console.log(damigeana)
damigeana = fermetare(damigeana)
console.log(damigeana)

console.log("aici se termina primul exemplu cu #VIN")

var noteOvidiu = [4, 2, 3, 4, 6, 7]
var noteStefan = [4, 6, 8, 4]
var numarDeNote = 0
var sumaNotelor = 0

function adunaNotele(listaNotelor) {
    var suma = 0
    for (let i = 0; i < listaNotelor.length; i++) {
        suma = suma + listaNotelor[i]
    }
    return suma
}

function numaraNotele(listaNotelor) {
    var nrNote = 0
    for (let i = 0; i < listaNotelor.length; i++) {
        nrNote++;
    }
    return nrNote
}

function mediaAritmetica(sumaNote, numarNote) {
    return sumaNote / numarNote
}

debugger

sumaNotelor = adunaNotele(noteOvidiu)
numarDeNote = numaraNotele(noteOvidiu)
var medieOvidiu = mediaAritmetica(sumaNotelor, numarDeNote)

sumaNotelor = adunaNotele(noteStefan)
numarDeNote = numaraNotele(noteStefan)
var medieStefan = mediaAritmetica(sumaNotelor, numarDeNote)

//Tema

//1. sa se creeze functia adunare cu 3 parametri care returneaza suma
//2. sa se creeze functia inmultire cu 3 parametri caare returneaza produsul
//3. sa se creeze functia scadere cu 2 parametri care returneaza diferenta
//4. Sa se calculeze folosind functiile de mai sus
//  3 + 4 + 5 * 2 * 3
//  (3 + 4 + 5) * 2 * 3
//  5 - 2 * 2 * 5
//  (5 - 2) * 2 * 5