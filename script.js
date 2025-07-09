//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
//document.addEventListener("DOMContentLoaded",getLocalTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
//filterOption.addEventListener("change",filterTodo);

//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();

    // TO do DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Adding to the local storage
  //  saveLocalTodos(todoInput.value);

    //chechmark button
    const completedButton=document.createElement("button");
    completedButton.innerHTML=`<i class="fasfa-check-circle"></li>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash button
    const trashButton=document.createElement("button");
    trashButton.innerHTML=`<i class="fasfa-check-circle"></li>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
 
    //Append to List
    todoList.appendChild(todoDiv);

    //Clear todo imput value
    todoInput.value="";
} 

function deleteCheck(e){
    const item = e.target;
    //Delete todo
    if(item.classList[0]=="trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
    }

    //CheckMark
    if(item.classList[0]=="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}