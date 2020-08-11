// 5.1.1
const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr
console.log(x, y) // 1

// 5.1.2
function soma(...números) {
    return números.reduce((acumulador, prox) => acumulador + prox)
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


// 5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const gabriel = { ...usuario, nome: 'Gabriel' }
const lontras = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } }

console.log(gabriel, lontras)
/*
{
    nome: 'Gabriel',
    idade: 23,
    endereco: { cidade: 'Rio do Sul', uf: 'SC', pais: 'Brasil' }
}
{
    nome: 'Diego',
    idade: 23,
    endereco: { cidade: 'Lontras', uf: 'SC', pais: 'Brasil' }
}
*/
