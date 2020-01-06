function parimpar (n){
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'ímpar'
    }
}
numeros = [1,2,3,4,5,6,7,8,9,10]
for (element of numeros) {
    console.log(`O número ${element} é um número ${parimpar(element)}`)
}
