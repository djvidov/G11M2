var tastaApasata = 9
function afiseazaMesajul() {
    if (tastaApasata == 1) {
        console.log("Buna ziua")
    }
    else if (tastaApasata == 2) {
        console.log("Good morning")
    }
    else if (tastaApasata == 3) {
        console.log("Bonjour")
    }
    else if (tastaApasata == 4) {
        console.log("germana")
    }
    else if (tastaApasata == 5) {
        console.log("italiana")
    }
    else if (tastaApasata == 6) {
        console.log("spaniola")
    }
    else {
        console.log("nu ai selectat nici o limba valida")
    }
}

//switch
function afiseazaMesajulCuSwich() {
    switch (tastaApasata) {
        case 1:
            console.log("Buna ziua")
            break;
        case 2:
            console.log("Good morning")
            break;
        case 3:
            console.log("Bonjour")
            break;
        case 4:
            console.log("germana")
            break;
        case 5:
            console.log("italiana")
            break;
        case 6:
            console.log("spaniola")
            break;

        default:
            //console.log("nu ai selectat nici o limba valida")
            break;
    }
}

afiseazaMesajul()
afiseazaMesajulCuSwich()

//if-uri imbricate
// Sa se realizeze o aplicatie care atunci cand afara temperatura este sub 5 grade sa zica: ia-ti fesu'
//atunci cand temperatura este sub 24 de grade sa iti zica ia-ti plover
// atunci cand temperatura este peste 24 de grade sa iti zica ia-ti tricou

function recomandareVestimentara(temperaturaAerului) {
    if (temperaturaAerului < 5) {
        console.log("ia-ti fesu'")
    }
    else if (temperaturaAerului < 24) {
        console.log("Ia-ti plover")
    }
    else {
        console.log("ia-ti tricou")
    }
}

recomandareVestimentara(0)
recomandareVestimentara(10)
recomandareVestimentara(26)

//Tema
//1. Sa se realizeze cu swich case o functie care sa se numeasca actiune jucator pe tastele: w, a, s, d, l
//2. Sa se realizeze o functie care sa evalueze scorul obtinut de un jucator astfel:
// daca scorul este sub 5 afisati: este varza
// daca scorul este sub 15 afisati: mai ai de exersat
// daca scorul este peste 15 afisati: esti bun


function tasteApasate(event) {
    // switch (event.) {
    //     case "w":

    //         break;

    //     default:
    //         break;
    // }
}