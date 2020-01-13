var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   }; //Should return: O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.

function phrase(object) {
    return `O usuário mora em ${object.cidade} / ${object.uf}, no bairro ${object.bairro}, na rua "${object.rua}" com o nº ${object.numero}`
}
console.log(phrase(endereco))