//1. Creati functia Scadere care primeste 2 parametri (scazator si descazut) si care returneaza rezultatul scaderii

 function scadere(a , b)
 {
    var diferenta = a - b
 console.log(`Diferenta numerelor ${a} si ${b} este ${diferenta} `)
 return diferenta
}
//2. Creati functia Adunare care primeste 3 parametri si care returneaza rezultatul adunarii celor 3 parametri

function adunare(a , b , c)
{ 
    var suma = a + b
console.log
(`Suma numerelor ${a} , ${b} , ${c} este ${suma}`)
return suma
}


//3. Creati functia Impartire care primeste 2 parametri (impartior si dempartit) si care returneaza rezultatul impartirii
function imparte(a , b )
{
    var impartire = a / b

    console.log (`Impartirea numerelor ${a} , ${b} este ${impartire}`)
    return impartire

}

//4. Creati functia Inmultire care primeste 3 parametri si care nu returneaza nimic, in schimb afiseaza rezultatul in alert
function inmulteste(a , b , c){
    var produs = a*b*c
    alert(`Inmultirea numerelor ${a} , ${b}, ${c} este ${produs}`)

}


