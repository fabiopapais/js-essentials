function soma(n1 = 0, n2 = 0) { // Colocamos esse "= 0" para no caso de não haver um parâmetro indicado na hora do call da function
    return n1 + n2
}
console.log(soma(5, 2))


function somaArray(numeros) {
    let momentSoma = 0
    for (element of numeros) {
        momentSoma += element
        if (element == numeros[6]) {
            console.log(momentSoma)
        }
    }
}
numbers = [1, 4, 5, 6, 7, 9, 10]
console.log(somaArray(numbers))
