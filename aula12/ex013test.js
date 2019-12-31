var hor = 3
var horas = []
//console.log(`Agoras são exatamente ${hora}`) 

function relogio (hora){
if (hora < 13) {
    console.log('Bom dia!')
}
else if (hora < 19){
    console.log('Boa tarde!')
}
else {
    console.log('Boa Noite!')
}
/*else {
//    console.log('Boa Noite!')
*/
}


for (i = 1; i < 25; i++ ) {
    horas.push(i)
}
console.log(horas)

for (let hora of horas){
    console.log(relogio(hora))
}