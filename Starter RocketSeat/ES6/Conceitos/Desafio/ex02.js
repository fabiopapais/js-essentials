const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// map "[23, 15, 30]"
const mapVar = usuarios.map(({ idade }) => idade)
console.log(mapVar) // [23, 15, 30]

// filter "[{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]"
const filterVar = usuarios.filter(usuario => {
    return usuario.empresa === 'Rocketseat' && usuario.idade > 18
})
console.log(filterVar) // [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

// find "undefined"
const findVar = usuarios.find(usuario => usuario.empresa == 'Google')
console.log(findVar) // undefined

// unifying operators "[{ nome: 'Diego', idade: 46, empresa: 'Rocketseat' },{ nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' }]"
const unifyingOperationsVar = usuarios.map(usuario => {
    return { ...usuario, idade: usuario.idade * 2 }
}).filter(usuario => usuario.idade <= 50)

console.log(unifyingOperationsVar)
/*
[
    { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/