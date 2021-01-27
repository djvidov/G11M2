var imagineId = "mainImg2";
var wifi = "imagini/WiFi.png";
var listaNume = ["Maria", "George", "Ion"]
var _123mere = 12


//functii fara parametrii
function StergeImagine() {
    document.getElementById(imagineId).src = ""
}
function ScoataClasa() {
    document.body.classList.remove('darkTheme');
}
//functii cu parametrii
function PuneImagine(idImagine, drumImagine) {
    document.getElementById(idImagine).src = drumImagine;
}

function AdaugaClasa(numeClasa) {
    document.body.classList.add(numeClasa);
}

//functii care returneaza un rezultat
function CalculeazaProdus(num1, num2) {
    var produs = num1 * num2
    return produs
}
//functie care nu returneaza un rezultat
function ArataProdusul() {
    var rezultat = CalculeazaProdus(12, 12);
    document.getElementById("rezultat").innerHTML = "Produsul tau este " + rezultat
}

function PuneImagineCuVerificare() {
    if (document.getElementById("asd")) {
        document.getElementById("asd").src = wifi
        return true;
    }
    else {
        return false;
    }
}

function AdaugaTema(elementId, tema) {
    var temaSchimbata;
    if (document.getElementById(elementId) != null) {
        document.getElementById(elementId).classList.add(tema);
        temaSchimbata = true;
    }
    else {
        temaSchimbata = false;
    }
    return temaSchimbata;
}

function TimpulZilei(ora) {
    if (ora == 12) {
        return "Este pranz"
    }
    else if (ora == 16) {
        return "Nu mai e pranz"
    }
    else {
        return "Ora de culcare"
    }
}

function ArataOra(ora) {
    var mesaj;
    switch (ora) {
        case 1:
        case 2:
        case 3:
            mesaj = "Este ora 1"
            break;
        case 4:
        case 5:
        case 6:
            mesaj = "Este ora 4"
            break;
        default:
            mesaj = "Este ce ora vrei tu sa fie"
            break;
    }
    return mesaj;
}

/* comentariu
multi
line
*/
