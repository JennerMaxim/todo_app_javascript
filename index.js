// Header
let headerdata = () => {
  let header = document.getElementById("header");

  return (header.innerHTML = `
  <div class="container">
    <h1 class="logo">TODO APP</h1>
  </div>
  `);
};
headerdata();

// Footer
let footerdata = () => {
  let footer = document.getElementById("footer");

  return (footer.innerHTML = `
  <div class="container">
    <div class="input">
      <input id="input" onkeypress="enterbutton(event)" type="text"  />
    </div>
    <div class="buttons">
      <button id="clear" onclick="clearTodo()" class="clear">Clear Completed</button>
      <button id="add" onclick="addTodo()" class="add">Add Todo</button>
    </div>
    <span ><span id="left">0</span> left</span>
  </div>
  `);
};
footerdata();

let content = document.getElementById("container");
let input = document.getElementById("input");
let left = document.getElementById("left");
let incrimentId = 0;

let addTodo = () => {
  if (input.value == "") {
    return;
  } else {
    incrimentId++;
    let todoList = document.createElement("div");
    todoList.className = "todo-list";
    content.appendChild(todoList);
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "checkbox";
    // let checkvalue = (check.checked = true);
    todoList.appendChild(check);
    let numb = document.createElement("span");
    numb.className = "numb";
    todoList.appendChild(numb);
    numb.innerHTML = incrimentId;
    let todo = document.createElement("div");
    todo.className = "todo";
    todo.innerHTML = input.value;
    todoList.appendChild(todo);
    check.name = incrimentId;
    console.log(check);
  }
  input.value = "";
  leftTodo();
  saveData();
};

let enterbutton = (event) => {
  if (event.keyCode === 13) {
    addTodo();
  }
  false;
};

let clearTodo = () => {
  let check = document.querySelectorAll(".checkbox");
  for (i in check) {
    if (check[i].checked) {
      check[i].parentElement.remove();
    }
  }
  leftTodo();
  saveData();
};

// Left Todo
let leftTodo = () => {
  let check = document.querySelectorAll(".checkbox");
  left.innerHTML = check.length;
  saveData();
};
// leftTodo();

let saveData = () => {
  localStorage.setItem("data", content.innerHTML);
  localStorage.setItem("leftdata", left.innerHTML);
};

let callData = () => {
  content.innerHTML = localStorage.getItem("data");
  left.innerHTML = localStorage.getItem("leftdata");
};
callData();
