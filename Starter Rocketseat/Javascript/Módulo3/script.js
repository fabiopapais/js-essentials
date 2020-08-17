var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")

var todos = JSON.parse(localStorage.getItem('list_todos')) || []
// Vamos pegar o array de todos no localStorage e convertê-lo para array novamente com o JSON.parse
// Caso o localStorage esteja vazio, ele irá gerar um arra vazio, impedindo que dê erro

function renderTodos() {
    listElement.innerHTML = ""
    for (todo of todos) {
        var todoElement = document.createElement("li")
        let todoText = document.createTextNode(todo + " ")
 
        var linkElement = document.createElement('a')
        linkElement.innerHTML = "Excluir"
        linkElement.setAttribute("href", "#")
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')  // Usamos o "+" para concatenar essa variável dentro do valor com "aspas"

        var pos = todos.indexOf(todo)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}

function addTodo() {
    let todoText = inputElement.value
    if (todoText == "") {
        window.alert("Adicione algo!")
    }
    else {
        todos.push(todoText)
        inputElement.value = ""
        renderTodos()
        saveToStorage()
    }
}

buttonElement.onclick = addTodo

function deleteTodo(pos) {
    todos.splice(pos, 1)    // Método "splice() remove itens de um array, recebendo a posição e quantos itens remover como parâmetro"
    renderTodos()
    saveToStorage()
}

function saveToStorage() {


    localStorage.setItem('list_todos', JSON.stringify(todos))
  // Local Storage é uma variável global, e setItem é um método para guardar dados
  // Primeiro damos um nome para esse dados, e depois colocamos os dados
  // Porém, ele só guarda valores em string, por isso usamos o método JSON.stringfy, para convertê-lo em uma string JSON
}