let amigo = {nome: "José", 
sexo: "Masculino", 
idade: 23,
peso: 70,
engordar(p = 0) {
    console.log('Engordou')
    this.peso += p // o ".this" auto-referencia o objeto
}}
amigo.engordar(2) // Armazenar funções dentro de objetos
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
