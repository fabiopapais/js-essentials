let num = [0, 1, 2, 3, 4]
console.log(`Nosso vetor é o ${num}`)
num[5] = 5
console.log(`Nosso novo vetor é o ${num}`)
num.push(6)
console.log(`Nosso novíssimo vetor (ou array) é ${num}`)


//Loops com vetores
let vetor = []
for (let i = 1; i <= 6; i++) {
    vetor.push(i) //Adiciona um elemento no final do array
    console.log(`Na posição ${i}, nosso vetor tem valor ${i} (igual hehe)`)
    console.log(vetor)
}
console.log(vetor)

// OU

let vetor = [0, 2, 1, 7, 4, 3]
for (let pos in vetor) {
    console.log(`Na posição ${pos}, nosso vetor tem valor ${vetor[pos]}`)
}

// OU

let vetor = [1, 2, 5, 7, 8, 9]
for (let pos = 0; pos < vetor.length; pos++) {
    console.log(`Na posição ${pos}, nosso vetor tem valor ${vetor[pos]}`)
}

//  Índice de um elemento
let val = [3, 5, 8, 9, 0, 10]
console.log(val.indexOf(8)) // Retorna o ÍNDICE de um ELEMENTO
console.log(val.indexOf(11)) // Caso o elemento não exista, o js irá retornar -1
