// 1. Data object 
// todoList object contains the data and methods to change the data.

let todoList = {
    todos: [],
    addTodo: function (todoText) {
        // push an object into the todo array and set completed default to false
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function (position, todoText) {
        // change the todoText at this todo at this position in array
        this.todos[position].todoText = todoText;
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },

    toggleCompleted: function (position) {
        // take the todo at this position and change the completed to the opposite
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    toggleAll: function () {

        let totalTodos = this.todos.length;
        let completedTodos = 0;

        // get number of completed todos
      this.todos.forEach(function(todo){
        if (todo.completed === true){
          completedTodos++;
      }});
      
      this.todos.forEach(function(todo){
        
         // if all todos are completed, make all false
        if (completedTodos === totalTodos){
          todo.completed = false;
        }
         // else make everything true
        else {
          todo.completed = true;
      }
});
    }}


let displayButton = document.getElementById("displayButton");
let toggleButton = document.getElementById("toggleButton");

console.log(displayButton);

let handlers = {
    
    addTodo: () => {
        let addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: () => {
        let changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        let changeTodoTextInput = document.getElementById("changeTodoTextInput");

        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: (position) => {
        todoList.deleteTodo(position);
        view.displayTodos();

    },
    toggleCompleted: () => {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();

    },

    toggleAll: () => {
        todoList.toggleAll();
        view.displayTodos();
    }

};

// responsible for what user sees
let view = {
    displayTodos: function(){
        let todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
      
      todoList.todos.forEach(function(todo, position){
      
        let todosLi = document.createElement("li");
        let todoTextWithCompletion = "";

            if (todo.completed === true){
                todoTextWithCompletion = "(x) " + todo.todoText;
            }
            else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }
            todosLi.id = position;
            todosLi.textContent = todoTextWithCompletion;
            todosLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todosLi);
      }, this);
    },
    createDeleteButton: () => {
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
  setUpEventListeners: () => {
    let todosUl = document.querySelector("ul");
todosUl.addEventListener("click", function(event){
  console.log(event.target.parentNode.id);
  
  // get element that was clicked on
  let elementClicked = event.target;
  // check if element clicked was a delete button
  if (elementClicked.className === "deleteButton"){
    //run handlers.deleteTodo(position)
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); 
}});
  }
}

view.setUpEventListeners();