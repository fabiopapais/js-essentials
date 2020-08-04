class List {
    constructor() { // é definido sempre que a classe é instanciada pela primeira vez
        this.todos = []
    } 
}

class TodoList extends List {
    constructor() {
        super() // este método chama o constructor da classe Pai

        this.usuário = "Fábio" // Dessa forma, vocẽ também pode definir mais propriedades
    }

    addTodo(todo) { 
        this.todos.push(todo)
        console.log(this.todos)
    }

    static showTodos() { // O static ignora todo o resto da classe e não precisa ser instanciado para ser chamado
        console.log(this.todos)
    } 
}

const todoList = new TodoList()
todoList.addTodo("Terminar o starter") // "Terminar o starter".

TodoList.showTodos() // undefined