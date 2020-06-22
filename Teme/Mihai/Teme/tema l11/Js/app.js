var tastaApasata = "L"
function actiuneJucator() {
    switch (tastaApasata) {
        case "W":
            console.log("Ai mers in fata")
            break;
        case "A":
            console.log("Ai mers in stanga")
            break;
        case "S":
            console.log("Ai mers in spate")
            break;
        case "D":
            console.log("Ai mers in dreapta")
            break;
        case "L":
            console.log("Ai activat ultimata:Butoiul cu Bere")
            break;
    }
}
actiuneJucator()
//evaluarea scorului
function evaluareaScorului(temperaturaAerului) {
    if (temperaturaAerului < 5) {
        console.log("NU BEI!")
    }
    else if (temperaturaAerului < 15) {
        console.log("NU AI BANI")
    }
    else {
        console.log("POTI SA BEI!")
    }
}
evaluareaScorului(4)
evaluareaScorului(7)
evaluareaScorului(16)
