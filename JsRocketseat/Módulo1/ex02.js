function pares(x, y) {
    let paresArray = []
    for (let i = x; i < y; i++) {
        if (i % 2 == 0) {
            paresArray.push(i)
        }
    }
    return paresArray
}
console.log(pares(32, 321))
