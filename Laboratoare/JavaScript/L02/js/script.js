var lista = ['Mere', 'Pere', 'Capsuni', 'Prune'];
var persoana2 = null;
var numar = 2;
var persoana = {
    firstName: "Ovidiu",
    lastName: "Rudi",
    age: 30,
    eyeColor: "blue"
};
console.log(persoana.age)

function RepetaDeZeceOri() {
    var i = 0;
    for (i; i < 10; i = i + 2) {
        console.log(i + ". Am fost apelat");
        if (i == 5) {
            break;
        }
    }
}

function AfiseazaLista() {
    var text = "Ai in lista ";
    var i = 0;
    // for normal
    for (i; i < lista.length; i++) {
        text = text + lista[i] + ","
    }

    console.log(text);

    var text2 = "Ai in lista ";
    //for in
    for (var element in lista) {
        text2 = text2 + lista[element] + ","
    }
    console.log(text2)
}

function FunctieCuWhile() {
    var i = 0
    while (i < lista.length) {
        console.log(lista[i])
        if (lista[i] == "Capsuni") {
            continue;
        }
        i++;
    }
}

function FunctieCuDoWhile() {
    var paragraf = document.getElementById("listaElemente");
    var text = " ";
    var i = 0
    do {
        text += "<br>" + lista[i]
        i++
    }
    while (i < lista.length)
    paragraf.innerHTML = text;
}

function OperatorTernar(num1, num2) {
    var numar = 0;
    numar = num1 % 2 == 0 ? num1 * num2 : num1 + num2;
    // if (num1 % 2 == 0) {
    //     numar = num1 * num2;
    // }
    // else {
    //     numar = num1 + num2;
    // }
    return numar;
}

function FunctiiPrestabilite() {
    var txt = "Avion cu motor si cu elice";
    console.log("Search " + txt.search("cu"));
    console.log("index of " + txt.lastIndexOf("cu"))
    var txtReplaced = txt.replace("cu", "pe")
    console.log(txtReplaced)
    console.log("substring: " + txt.substring(1, 10))
    console.log("Slice " + txt.slice(7, 13))
    console.log("Text mare " + txt.toUpperCase());
    var x = txt.split("cu", 1);
    console.log(x)
    console.log(txt.concat(" asd", "\t", "abc"))
}