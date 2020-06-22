
var conditie = true
while (conditie) {
    //cod de executat daca conditia este indeplinita
    console.log("Conditia este inca adevarata")
    conditie = false
}
console.log("Conditita este falsa")



var temperaturaCampina = 1

while (temperaturaCampina == 0) {
    console.log("astept raspunsul de la server")
}
console.log(`Temperatura in Campina este de: ${temperaturaCampina} grade`)

temperaturaCampina = 0
var numarDeIncercari = 1000
while (temperaturaCampina == 0) {
    console.log("2. astept raspunsul de la server")
    numarDeIncercari--
    if (numarDeIncercari <= 0) {
        temperaturaCampina = 5
    }
}
console.log(`2. Temperatura in Campina este de: ${temperaturaCampina} grade`)

conditie = false
while (conditie) {
    //cod de executat daca conditia este indeplinita
    console.log("Conditia este inca adevarata")
}

do {
    //codul ce trebuie executat
    console.log("Conditia este inca adevarata")
} while (conditie)

//cod1
//cod2
//cod3
while (conditie) {
    //cod1
    //cod2
    //cod3
}

do {
    //cod1
    //cod2
    //cod3
} while (conditie)

//break & continue => mecanisme de abandonare a executiei in structurile repetitive ( for, while, do while)

var listaNumere = [5, 3, 7, 21, 87, 22, 66]

function cautaNumar(lista, numarCautat) {
    var numarGasit = false
    for (let i = 0; i < lista.length; i++) {
        const numar = lista[i];
        if (numar == numarCautat) {
            console.log("am gasit numarul")
            numarGasit = true
            break
        }
    }
    return numarGasit
}

console.log(cautaNumar(listaNumere, 21))

var listaVarste = [34, 15, 23, 75, -6, 56, -43, 53]

//calculati anul nasterii
function calculeazaAnulNasterii(listaVarste) {
    for (let i = 0; i < listaVarste.length; i++) {
        const varsta = listaVarste[i];
        if (varsta < 0) {
            continue
        }
        var anulCurent = new Date().getFullYear()
        var anulNasterii = anulCurent - varsta;
        console.log(`La varsta de ${varsta} inseamna ca este nascut in ${anulNasterii}`);
    }
}

calculeazaAnulNasterii(listaVarste)

// Tema
// 1. Afisati toate numerele dintr-o lista care se impart la 5 folosind continue
// 2. Afisati toate cuvintele din lista care contin litera a folosind continue
var listaNume = ["ana", "maria", "dan", "george", "mircea"]
// 3.