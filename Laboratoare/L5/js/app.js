//alert("merge")

var punctajCursant1 = 26
var punctajCursant2 = 61
var punctajCursant3 = 35
var punctajCursant4 = 67
var punctajCursant5 = 51
var punctajCursant6 = 46

var ceMaiMareNumar = punctajCursant1;

if (ceMaiMareNumar < punctajCursant2)
    ceMaiMareNumar = punctajCursant2;

if (ceMaiMareNumar < punctajCursant3)
    ceMaiMareNumar = punctajCursant3;

if (ceMaiMareNumar < punctajCursant4)
    ceMaiMareNumar = punctajCursant4;

if (ceMaiMareNumar < punctajCursant5)
    ceMaiMareNumar = punctajCursant5;

if (ceMaiMareNumar < punctajCursant6)
    ceMaiMareNumar = punctajCursant6;

console.log(`Cel mai mare punctaj este ${ceMaiMareNumar}`)

var celMaiMicNumar = punctajCursant1;

if (celMaiMicNumar > punctajCursant2)
    celMaiMicNumar = punctajCursant2;

if (celMaiMicNumar > punctajCursant3)
    celMaiMicNumar = punctajCursant3;

if (celMaiMicNumar > punctajCursant4)
    celMaiMicNumar = punctajCursant4;

if (celMaiMicNumar > punctajCursant5)
    celMaiMicNumar = punctajCursant5;

if (celMaiMicNumar > punctajCursant6)
    celMaiMicNumar = punctajCursant6;

console.log(`Cel mai mic punctaj este ${celMaiMicNumar}`)

//varianta cu sir de numere
var punctaje = [];
punctaje.push(punctajCursant1)
punctaje.push(punctajCursant2)
punctaje.push(punctajCursant3)
punctaje.push(punctajCursant4)
punctaje.push(punctajCursant5)
punctaje.push(punctajCursant6)

ceMaiMareNumar = punctaje[0];
celMaiMicNumar = punctaje[0];

for (var index = 1; index < punctaje.length; index++) {
    if (ceMaiMareNumar < punctaje[index]) {
        ceMaiMareNumar = punctaje[index];
    }
    if (celMaiMicNumar > punctaje[index]) {
        celMaiMicNumar = punctaje[index];
    }
}

console.log(`Cel mai mare punctaj este ${ceMaiMareNumar}`)
console.log(`Cel mai mic punctaj este ${celMaiMicNumar}`)

// se da o lista de 6 cursanti. Sa se afle daca lista contine cursantii: Andrei, Mihai, Maria
var listaCursanti = [];
listaCursanti.push('Gabi')
listaCursanti.push('Ana')
listaCursanti.push('Daniel')
listaCursanti.push('Mihai')
listaCursanti.push('Cristi')
listaCursanti.push('Stefan')

var numeCautat = "Maria";
var amGasit = false;

for (var index = 0; index < listaCursanti.length; index++) {
    if (listaCursanti[index] == numeCautat)
        amGasit = true;
}

if (amGasit) {
    console.log("am gasit numele " + numeCautat)
}
else {
    console.log("nu am gasit numele " + numeCautat)
}

//Tema: Creati o lista cumparaturi cu 10 produse. 
//1. Afisati produsele de pe pozitia impara. Hint: %
//2. Cautati produsele: "Bere", "Alune", si daca nu exista, adaugatile in lista
//3. La final afisati cate produse are lista. + Afisati toate produsele din lista;



