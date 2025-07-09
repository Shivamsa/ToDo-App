//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
 document.addEventListener("DOMContentLoaded",getLocalTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);

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
    saveLocalTodos(todoInput.value);

    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
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
        removeLocalTodos(todo);
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

function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
            case "incompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
        }
    })
}

function saveLocalTodos(todo){
    //check if already exists
    let todos;
    if(localStorage.getItem("todos") ===null ){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getLocalTodos(){
    //check if already exists
    let todos;
    if(localStorage.getItem("todos") ===null ){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
         // TO do DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
        //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

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
    })

}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") ===null ){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex=todo.children[0].innerHTML;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}