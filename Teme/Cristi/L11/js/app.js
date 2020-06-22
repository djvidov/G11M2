//1. Sa se realizeze cu swich case o functie care sa se numeasca actiune jucator pe tastele: w, a, s, d, l

function actiuneaJucatorilor(tasta) {

    switch (tasta) {
        case w:
            console.log("mergi inainte")
            break;

        case a:
            console.log("mergi la stanga")
            break;

        case s:
            console.log("da-i cu spatele")
            break;
        case d:
            console.log("mergi la dreapta")
            break;
        case l:
            console.log("ultimata")

        default:
            break;
    }


}
actiuneaJucatorilor(w)



//2. Sa se realizeze o functie care sa evalueze scorul obtinut de un jucator astfel:
// daca scorul este sub 5 afisati: este varza
// daca scorul este sub 15 afisati: mai ai de exersat
// daca scorul este peste 15 afisati: esti bun



function evalueazaScorul(scor) {


    if (scor < 5) {
        console.log("esti varza")

    } else if (scor < 15) {
        console.log("mai ai de exersat")

    } else {
        console.log("esti bun dar nu si cautat")
    }
}

evalueazaScorul(0)