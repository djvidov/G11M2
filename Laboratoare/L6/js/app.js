
//functii
// in functie de input (informatia pe care o pimesc la executie):

// 1. Functii fara parametri (adica nu au nevoie de informatii suplimentare ca sa se execute)

//declararea unei functii fara parametri
function numeFunctie()//intre paranteze se pun parametrii ( aici nu este cazul)
{
    //aici pune codul pe care vrem sa il execute functia

    //apelare functie fara parametri din functie
    afiseazaMesajDeEroare()
    afiseazaMesajDeEroare()

    //apelare functie cu un parametru din functie
    ridicaLaPatrat(9)

    //apelarea functiei cu 2 parametri din functie
    adunare(11, 44)
}

function afiseazaMesajDeEroare() {
    alert("Acesta este un mesaj de eroare. Trebuie sa o corectezi!")
}

//apelare functie fara parametri
afiseazaMesajDeEroare()

// 2. Functii cu parametri ( care au nevoie de informatii din exterior pentru a se executa)

//declararea unei functii cu parametri
function numeFunctie2(/* intre paranteze punem paretrii separati de virgula*/) {
    //aici se pune codul
}

//declararea unei functii cu un parametru
function ridicaLaPatrat(numar) {
    var patratulNumarului = numar * numar
    alert(`Patratul numarului ${numar} este ${patratulNumarului}`)
}

//apelarea functiei cu un parametru
ridicaLaPatrat(6)

//apelarea unei functii cu un parametru car primeste valoare dintr-o variabila
var numarMic = 3
ridicaLaPatrat(numarMic)

//declarea/crearea functiei cu 2 parametri
function adunare(a, b) {
    var suma = a + b
    alert(`Suma numerelor ${a} si ${b} este ${suma}`)
}

//apelarea functiei cu 2 parametri
adunare(9, 7)

//apelarea unei functii cu doi parametri care primesc valori din variabile
var numarMare = 23
adunare(numarMic, numarMare)

//
function detectezaTasta(evn) {
    if (evn.key == "a") {
        console.log('mergi la stanga')
    }
    else if (evn.key == "d") {
        console.log('mergi la dreapta')
    }
    else if (evn.key == "w") {
        console.log('mergi in sus')
    }
    else if (evn.key == "s") {
        console.log('mergi in jos')
    }
}

// functii dupa output (informatia pe care o trimit mai departe dupa executie)
// 3. Functii care nu returneaza nici o informatie

// 4. Functii care returneaza un rezultat
function ridicaLaPatrat2(numar) {
    var patratulNumarului = numar * numar
    // alert(`Patratul numarului ${numar} este ${patratulNumarului}`)
    return patratulNumarului
}

var pahar

pahar = 7
//apelarea functie care returneaza ceva
pahar = ridicaLaPatrat2(8)

alert('8 => ' + pahar)

//TEMA
//1. Creati functia Scadere care primeste 2 parametri (scazator si descazut) si care returneaza rezultatul scaderii
//2. Creati functia Adunare care primeste 3 parametri si care returneaza rezultatul adunarii celor 3 parametri
//3. Creati functia Impartire care primeste 2 parametri (impartior si dempartit) si care returneaza rezultatul impartirii
//4. Creati functia Inmultire care primeste 3 parametri si care nu returneaza nimic, in schimb afiseaza rezultatul in alert