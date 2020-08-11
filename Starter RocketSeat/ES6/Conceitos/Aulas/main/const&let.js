// MUTAÇÃO
const usuário = { name: "Fábio" }

usuário.name = "Outro"

console.log(usuário) // { name: "Outro" }

// REATRIBUIÇÃO
let nome = "Fábio"

nome = "Outro"

console.log(nome) // Outro

nome = { outro: "Outro" }

console.log(nome) // { outro: "Outro" }
