var listaCumparaturi = [] ;
listaCumparaturi.push("bere")
listaCumparaturi.push("paine")
listaCumparaturi.push("seminte")
listaCumparaturi.push("salam")
listaCumparaturi.push("oua")
listaCumparaturi.push("lapte")
listaCumparaturi.push("ciocolata")
listaCumparaturi.push("vodka")
listaCumparaturi.push("ulei")
listaCumparaturi.push("tuica")

for( var index=0;index < listaCumparaturi.length;index++ )
{
if(index%2!=0)
console.log( index + "." +listaCumparaturi[index] )
}

var numeCautat = "alune";
var amGasit = false;

for (var index = 0; index < listaCumparaturi.length; index++) {
    if (listaCumparaturi[index] == numeCautat)
        amGasit = true;
}

if (amGasit) {
    console.log("am gasit " + numeCautat)
}
else {
    listaCumparaturi.push(numeCautat)
    console.log("am adaugat" + numeCautat)
    
}
var numeCautat = "bere";
var amGasit = false;

for (var index = 0; index < listaCumparaturi.length; index++) {
    if (listaCumparaturi[index] == numeCautat)
        amGasit = true;
}

if (amGasit) {
    console.log("am gasit " + numeCautat)
}
else {
    listaCumparaturi.push(numeCautat)
    console.log("am adaugat" + numeCautat)
}



console.log(listaCumparaturi)