//var hora = 16

var agora = new Date() // Processdo para se criar uma variável que pegue o horário do sistema
var horaAgora = agora.getHours()

//console.log(`Agoras são exatamente ${hora} horas`)
function relogio(hora) {
    if (hora < 13) {
        console.log('Bom dia!')
    }
    else if (hora < 19) {
        console.log('Boa tarde!')
    }
    else if (hora < 5) {
        console.log('Boa Madrugada!')
    }
    else {
        console.log('Boa Noite!')
    }
} 
relogio(horaAgora) 
