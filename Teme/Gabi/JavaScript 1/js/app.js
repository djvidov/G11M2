//1.Sa creati doua butoane si doua functii care sa schimbe culoarea textului dintr-un div cu id-ul: status-div;\\
function changeTextColor() {
    document.getElementById("status-div").style.color = "red";
}

function changeTextColor2() {
    document.getElementById("status-div").style.color = "blue";
}

/*  2.Sa creati un buton care sa calculeze suma dintre 2numere si sa o stocati intr-o variabila (daca puteti si 
    sa o afisati la fel cum am facut noi); */
function adunare(a, b) {
    var suma = a + b
    alert(`Suma numerelor ${a} si ${b} este ${suma}`)

}

// 3.Creati 3 clase css care sa schimbe culoarea de background a body - ului; //

function changeBackground() {
    if (document.body.classList.contains("verde") == true) {
        document.body.classList.remove("verde");
        document.body.classList.add("rosu")
    }
    else {
        document.body.classList.remove("rosu")
        document.body.classList.add("verde");
    }


}

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}