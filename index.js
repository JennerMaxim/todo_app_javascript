let header = document.getElementById("header");
let content = document.getElementById("content");
let footer = document.getElementById("footer");

let headerdata = () => {
  return header.innerHTML = `
  <div class="container">
    <h1 class="logo">TODO APP</h1>
  </div>
  `;
};
headerdata();

let contentdata = () => {
  return (content.innerHTML = `
  <div class="container">
    <div id="todo" class="todo"></div>
  </div>
  `);
};
contentdata();
let footerdata = () => {
  return (footer.innerHTML = `
  <div class="container">
    <div class="input">
      <input id="input" type="text" />
    </div>
    <div class="buttons">
      <button id="add" class="add">Add Todo</button>
      <button id="clear" class="clear">Clear Completed</button>
    </div>
    <span id="left">left</span>
  </div>
  `);
};
footerdata();
let add = document.getElementById("add");
let clear = document.getElementById("clear");
let id = 0;
let todoss = [];
// let todos;

let check = `<input id="checkid" type="checkbox"> `;

// Add Todo List
add.addEventListener("click", () => {
  id++;
  let todo = document.getElementById("todo");
  let inputTodo = document.getElementById("input").value;

  // Try
  // let todocontent = todo.innerHTML = inputTodo

  todo.innerHTML += check + id + ". " + inputTodo + "<br>";
  todoss.push(id, inputTodo);
  localStorage.setItem("data", content);

  console.log(todo);
  return todoss;
});

let todos = localStorage.getItem("data");

todo.innerHTML = todos;
console.log(todos);

// Clear Todo List
clear.addEventListener("click", () => {
  let checkid = document.getElementById("checkid");
  if (checkid === true) {
    console.log("Hi");
  } else {
    console.log(todoss);
  }
});

// let func1 = () => {
//   return (fun3 = () => {
//     nam2 = "test2";
//     nam1 = "test";
//   });

//   // return nam1, nam2;
// };
// let func2 = () => {
//   func1();
//   console.log(nam1 + " Maxim " + nam2);
// };
// func2();
