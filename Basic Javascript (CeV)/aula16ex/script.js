let txtNum = document.getElementById("txtNum") // Numbers input
let addedNum = document.getElementById("addedNum") // Lista de números adicionados
var numberArray = []
var res = document.getElementById('res')

function arrayAnalysis(num, ar) { //Identifica se existe um número igual no array
    if (ar.indexOf(num) != -1) { // GENIAL!! Se o método indexOf retorna -1, significa que o número não existe no array
        return true
    }
    else {
        return false
    }
}
function addNum() { // Esta função irá adicionar o número na lista e no array, fazendo as verificações de input necessárias
    if (arrayAnalysis(Number(txtNum.value), numberArray)) { // Só roda se aquela função identificar que existe um número igualno array
        console.log("Erro")
        window.alert("Você já adicionou este número. Por favor adicione um diferente!")
    }
    else {
        if (txtNum.value.length == 0 || Number(txtNum.value) == 0) {
            window.alert("Por favor, insira um número válido!")
        }
        if (Number(txtNum.value) >= 1 && Number(txtNum.value) <= 100) {

            //HTML interaction
            var resList = document.createElement("option")
            resList.innerHTML = `O número ${Number(txtNum.value)} foi adicionado `
            addedNum.appendChild(resList)
            //Array interaction
            numberArray.push(Number(txtNum.value))
            console.log(numberArray)
        }
        else {
            window.alert("Por favor, insira um número válido!")
        }
    }
    txtNum.value = ''
    txtNum.focus()
}
function inputAnalysis() {

    numList = numberArray.length //Números cadastrados
    numMaior = numberArray.sort()[numberArray.length - 1] //Maior número
    numMenor = numberArray.sort()[0] //Menor número
    var numSoma = 0
    for (let number of numberArray) { //Soma de todos os valores
        numSoma += number
    }
    //var numSoma = numberArray.reduce((a, b) => a + b, 0) // Esse funciona também
    numMedia = numSoma / numList //Média de todos os valores

    if (numberArray.length == 0) {
        window.alert('Por favor, adicione algum número na lista!')
    }
    else {
        var numListHTML = document.createElement('p')
        var numMaiorHTML = document.createElement('p')
        var numMenorHTML = document.createElement('p')
        var numSomaHTML = document.createElement('p')
        var numMediaHTML = document.createElement('p')
        res.appendChild(numListHTML)
        res.appendChild(numMaiorHTML)
        res.appendChild(numMenorHTML)
        res.appendChild(numSomaHTML)
        res.appendChild(numMediaHTML)

        numListHTML.innerHTML = `Você inseriu <b>${numList}</b> números`
        numMaiorHTML.innerHTML = `O maior número que você inseriu foi <b>${numMaior}</b>`
        numMenorHTML.innerHTML = `O menor número que você inseriu foi <b>${numMenor}</b>`
        numSomaHTML.innerHTML = `A soma de todos os números dá <b>${numSoma}</b>`
        numMediaHTML.innerHTML = `A média de todos os números dá <b>${numMedia}</b>`
        document.body.style.backgroundColor = 'rgba(20, 238, 38, 0.8)'
    }
}