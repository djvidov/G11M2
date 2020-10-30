function inputSchimbat() {
    var email = document.getElementById('emailInput').value;//DOM
    //valoarea era 123@ => 1 != @, 2 != @, 3 != @, @ == @
    if (!email.includes("@")) {
        alert("Email ul tau nu contine un @");
    }
    else {
        alert('M-am schimbat!' + email);
    }
}
function userFocusat() {
    alert("M ai focusat!");
}
function aiRidicatDegetul() {
    alert('Ai ridicat degetul dupa tastatura!')
}