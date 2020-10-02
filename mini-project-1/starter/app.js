// collect UI Element

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");


todoForm.addEventListener("submit",addTodo);

function addTodo(e) {
    e.preventDefault();
    
    //membuat Li element
    const li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1"

    //menambahkan children ke dalam element li
    li.appendChild(document.createTextNode("Value dari task input"))

    //membuat delete button
    const a = document.createElement("a");

    //memberi properti untuk a element
    a.href="#";
    a.className="badge badge-danger"
    a.innerHTML = "Delete"

    //menyelipkan element a ke dalam element li
    li.appendChild(a)

    console.log(li);
}