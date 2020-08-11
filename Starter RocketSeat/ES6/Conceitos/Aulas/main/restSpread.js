// REST 
const pessoa = {
    nome: 'Fábio',
    idade: 16,
    cidade: 'Recife'
}

const { nome, ...resto } = pessoa

console.log(nome) // Fábio
console.log(resto) // { idade: 16, cidade: 'Recife }

// SPREAD

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3bugado = [arr1, arr2] // [[1, 2, 3],[4, 5, 6]]
const arr3 = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

