//alert('hi')
var listaCumparaturi = []
listaCumparaturi.push('seminte')
listaCumparaturi.push('suc')
listaCumparaturi.push('cipsuri')
listaCumparaturi.push('guma')
listaCumparaturi.push('cablu usb')
listaCumparaturi.push('dezinfectant')
listaCumparaturi.push('masca')
listaCumparaturi.push('laveta')
listaCumparaturi.push('mouse')
listaCumparaturi.push('husa telefon')
//
for(var i=0;i<listaCumparaturi.length;i++){
    if(i%2 != 0)
        console.log(i +  " = " + listaCumparaturi[i])
}
//
var deAdaugat = 'bere'
var existaDeja = false

for( i=0;i<listaCumparaturi.length;i++){
    if(listaCumparaturi[i]==deAdaugat)
        existaDeja= true
}
        
if(existaDeja)
    console.log('am gasit bere')
else 
    listaCumparaturi.push('bere')
//
var dePus = 'seminte'
existaDeja = false

for( i=0;i<listaCumparaturi.length;i++){
    if(listaCumparaturi[i]==dePus)
        existaDeja= true
}
        
if(existaDeja)
    console.log('am gasit seminte')
else 
    listaCumparaturi.push('seminte')
//
console.log(listaCumparaturi.length)
for( i=0;i<listaCumparaturi.length;i++){
    console.log(listaCumparaturi[i])
}
    