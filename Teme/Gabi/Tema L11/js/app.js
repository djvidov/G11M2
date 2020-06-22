//1. Sa se realizeze cu swich case o functie care sa se numeasca actiune jucator pe tastele: w, a, s, d, l
function actiuneJucator(directie) {
    switch (directie) {
        case "w":
            console.log("Mergi in sus")
            break;
        case "a":
            console.log("Mergi la stanga")
            break;
        case "s":
            console.log("Mergi in jos")
            break;
        case "d":
            console.log("mergi la dreapta")
            break;
        case "l":
            console.log("Sari")
            break;

        default:
            console.log("Tasta nu exista")
            break;
    }
}
actiuneJucator("w")

actiuneJucator("a")

actiuneJucator("s")

actiuneJucator("d")

actiuneJucator("l")


//2. Sa se realizeze o functie care sa evalueze scorul obtinut de un jucator astfel:
// daca scorul este sub 5 afisati: este varza
// daca scorul este sub 15 afisati: mai ai de exersat
// daca scorul este peste 15 afisati: esti bun

function afiseazaScor(scor) {
    if (scor < 5) {
        console.log("Esti varza")
    }

    else if (scor < 15) {
        console.log("Mai ai de exersat")
    }
    else {
        console.log("Esti bun")
    }
}

afiseazaScor(15)




