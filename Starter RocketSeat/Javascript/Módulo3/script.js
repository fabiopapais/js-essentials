var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")

var todos = [
    'Fazer Café',
    'Estudar Javascript',
    'Acessar Comunidade RocketSeat',
]      

function renderTodos() {
    listElement.innerHTML = ""
    for (todo of todos) {
        var todoElement = document.createElement("li")
        let todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.innerHTML = "Excluir"
        linkElement.setAttribute("href", "#")

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')  // Usamos o "+" para concatenar essa variável dentro do valor com "aspas"
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}

function addTodo() {
    let todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ""
    renderTodos()
}

buttonElement.onclick = addTodo

function deleteTodo(pos) {
    todos.splice(pos, 1)    //Método "splice() remove itens de um array, recebendo a posição e quantos itens remover como parâmetro"
    renderTodos()
}