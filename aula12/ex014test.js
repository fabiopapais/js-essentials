var agora = new Date()
var diaSem = agora.getDay()
var diasSem = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado'
}
//console.log(diaSem)

for (var element of Object.values(diasSem)){
    if (this.property == diaSem){
        console.log(diaSem[element])
    }
}
