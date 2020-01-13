var nomes = ["Diego", "Gabriel", "Lucas"] 

var bigUl = document.getElementById("bigUl")

function adicionar() {
    for (element of nomes) {
        var listItem = document.createElement("li")
        bigUl.appendChild(listItem)
        listItem.innerText = element
    }
}