var ListaCumparaturi = []
ListaCumparaturi .push("banane")
ListaCumparaturi .push("ciocolata")
ListaCumparaturi.push("lapte")
ListaCumparaturi.push("topping capsuni")
ListaCumparaturi.push("nutela")
ListaCumparaturi.push("apa minerala")
ListaCumparaturi.push("faina")
ListaCumparaturi.push("inghetata")
ListaCumparaturi.push("capsuni")
ListaCumparaturi.push("dulceata")
console.log(ListaCumparaturi);

for (let index = 0; index < ListaCumparaturi.length; index++) 
{
if ( (index % 2 ) > 0 ) 
 console.log(ListaCumparaturi[index])
}

var ceanumevreisaadaugi
ceanumevreisaadaugi="bere"
amGasit=false

for (var index = 0; index < ListaCumparaturi.length; index++) {

  if (ListaCumparaturi[index] == ceanumevreisaadaugi)
      amGasit = true}

if (amGasit) {console.log(ceanumevreisaadaugi)}
  else 
  {
  ListaCumparaturi.push(ceanumevreisaadaugi)
}
console.log(ListaCumparaturi)

ceanumevreisaadaugi="alune"
amGasit=false
for (var index = 0; index < ListaCumparaturi.length; index++) 
{
  if (ListaCumparaturi[index] == ceanumevreisaadaugi)
      amGasit = true
    }

if (amGasit) {console.log(ceanumevreisaadaugi)
}
  else
  {
  ListaCumparaturi.push(ceanumevreisaadaugi)
}
console.log(ListaCumparaturi)




