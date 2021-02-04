var numar = 2
var numarString = "cinci"
var numarCuVirgula = 5.163
var suntEgale = 12 === parseInt(numarString)
console.log(suntEgale)
var numarRandom = Math.floor((Math.random() * 10) + 5)
console.log(numarRandom)

var celMaiMareNumar = Math.max(1, 23, 12, 56, 4, 9)
console.log(celMaiMareNumar)
var celMaiMicNumar = Math.min(1, 23, 12, 56, 4, 9)
console.log(celMaiMicNumar)

var data = new Date()
console.log(data)


//var variabila = conditie ? functie daca e adevarat : fuctie daca nu e adevarat
true == false ? alert("e adevarat") : alert("e false")

var rezultat = confirm("Ce faci, esti bine?")
console.log("user ul este: " + rezultat)

var nume = prompt("cum te cheama?")
console.log("numele tau este: " + nume)

var newDiv = document.createElement("div");

function CreateDiv() {
    var textDinDiv = document.createTextNode("Salut, ce faci?")
    newDiv.appendChild(textDinDiv)
    document.body.appendChild(newDiv)
}

function DeleteDiv() {
    document.body.removeChild(newDiv)
}

function ReplaceDiv() {
    var anotherDiv = document.createElement("h1")
    var text = document.createTextNode("Bine, tu ce faci?")
    anotherDiv.appendChild(text)
    document.body.replaceChild(anotherDiv, newDiv)
}
function CreateNewDivWithClass() {
    var newClass = document.createAttribute("class")
    newClass.value = "darkMode"
    newDiv.setAttributeNode(newClass)
    CreateDiv()
}

function ApasaButon() {
    var buton = document.getElementById("myBtn");
    if (buton.hasAttribute("onclick")) {
        buton.click();
    }
    else {
        console.log("Butonul nu poate fi apasat!")
    }
}