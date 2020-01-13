
var inputName = document.getElementById("inputName")
var bigUl = document.getElementById("bigUl")

function adicionar() {
        var listItem = document.createElement("li")
        bigUl.appendChild(listItem)
        listItem.innerText = inputName.value
        inputName.value = ''
} 