// collect UI Element

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");


todoForm.addEventListener("submit",addTodo);
todoList.addEventListener("click",deleteTodo);

function addTodo(e) {
    e.preventDefault();
    
    //membuat Li element
    const li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1"

    //menambahkan children ke dalam element li
    li.appendChild(document.createTextNode(todoInput.value))

    //membuat delete button
    const a = document.createElement("a");

    //memberi properti untuk a element
    a.href="#";
    a.className="badge badge-danger delete-todo"
    a.innerHTML = "Delete"

    //menyelipkan element a ke dalam element li
    li.appendChild(a)

    //memasukan elemnt li ke dalam element todolist
    todoList.appendChild(li)

    console.log(li);
}

function deleteTodo(e){
    e.preventDefault();

    if (e.target.classList.contains("delete-todo")) {
        const parent = e.target.parentElement;

        parent.remove();

        
    }
}