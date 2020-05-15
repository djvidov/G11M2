var Cumparaturi = [] ;  //10 produse
Cumparaturi.push("Carne")
Cumparaturi.push("Oua")
Cumparaturi.push("Ceapa")
Cumparaturi.push("Inghetata")
Cumparaturi.push("Cereale")
Cumparaturi.push("Branza")  
Cumparaturi.push("Paine")
Cumparaturi.push("Rosii")
Cumparaturi.push("Castraveti")
Cumparaturi.push("Apa")
console.log (Cumparaturi)

 
var amGasit =false
var ProdusCautat = "Alune"

for (let index = 0; index < Cumparaturi.length; index++) {
    if (Cumparaturi[index] == ProdusCautat)
    amGasit = true}
    
        if (amGasit) {console.log("Am gasit " + ProdusCautat)}
    
        else {Cumparaturi.push(ProdusCautat)}
    
            console.log (Cumparaturi)

var ProdusCautat = "Bere"
    for (let index = 0; index < Cumparaturi.length; index++) {
        if (Cumparaturi[index] == ProdusCautat)
                amGasit = true}
        
        if (amGasit) {console.log("Am gasit " + ProdusCautat)}
        
        else {Cumparaturi.push(ProdusCautat)}
            console.log (Cumparaturi)


            console.log("Lista are " + Cumparaturi.length + " produse")


//Pentru alimentele din lista cu numar pozitiv
          //  for (let index = 0; index < Cumparaturi.length; index++) {
        //if ((index % 2) == 0)
        //console.log ( Cumparaturi[index])
        
                    
        //}
            for (let index = 0; index < Cumparaturi.length; index++) {
        if ((index % 2) > 0)
            console.log (Cumparaturi[index])
    
            }
