// collect UI Element

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");


//kumpulan eventListener

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos);
filterInput.addEventListener("keyup", filterTodos);


//DOM Function

function addTodo(e) {
  if (todoInput.value) {
    e.preventDefault();

    //membuat Li element
    const li = document.createElement("li");
    li.className =
      "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";

    //menambahkan children ke dalam element li
    li.appendChild(document.createTextNode(todoInput.value));

    //membuat delete button
    const a = document.createElement("a");

    //memberi properti untuk a element
    a.href = "#";
    a.className = "badge badge-danger delete-todo";
    a.innerHTML = "Delete";

    //menyelipkan element a ke dalam element li
    li.appendChild(a);

    //memasukan elemnt li ke dalam element todolist
    todoList.appendChild(li);

    // addTodo localstorage
    addTodoLocalStorage(todoInput.value);
    
    //mengosongkan form setelah di input
    todoInput.value = "";
  } else {
    alert("Tidak boleh kosong ! ");
  }
}

function addTodoLocalStorage(toDoInputValue){
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(toDoInputValue)

  localStorage.setItem("todos",JSON.stringify(todos))
}

function deleteTodo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    if (confirm("Apakah anda yakin akan menghapus?")) {
      const parent = e.target.parentElement;

      parent.remove();
    }
  }
}

function clearTodos() {
  todoList.innerHTML = "";
}

function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const todoItems = document.querySelectorAll(".todo-item");

  todoItems.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    if (itemText.indexOf(filterText) !== -1) {
      item.setAttribute("style", "display:block");
    } else {
      item.setAttribute("style", "display:none !important");
    }

    console.log(itemText);
  });

  // console.log(todoItems);
}
