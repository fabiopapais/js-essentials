//RECURSIVIDADE
function fatorialRecursiva(n) { // Uma função recursiva é uma função que "se chama" dentro dela mesma
    if (n == 0) {
        return 1
    } else {
        n *= fatorialRecursiva(n-1)
        return n
    }
}
console.log(fatorialRecursiva(200))        