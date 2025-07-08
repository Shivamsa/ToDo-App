const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = documewnt.querySelector(".tod-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded",getLocalTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

