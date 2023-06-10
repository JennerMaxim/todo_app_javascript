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
      <input id="input" type="text" />
    </div>
    <div class="buttons">
      <button id="add" onclick="addTodo()" class="add">Add Todo</button>
      <button id="clear" onclick="clearTodo()" class="clear">Clear Completed</button>
    </div>
    <span ><span id="left">0</span> left</span>
  </div>
  `);
};
footerdata();

let content = document.getElementById("container");
let input = document.getElementById("input");
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

    input.value = "";
    // check.id = incrimentId;
    // console.log(check);
    return check;
  }
};

// 

// console.log(checkbox);

// let clearTodo = () => {
//   let checkid = document.getElementById("input.checkbox");
//   let check = document.getElementsByClassName("checkbox");

//   // checkbox.checked === true;
//   // checkbox.id = "checkbox";
//   if (check.checked === true) {
//     console.log(check);
//   }
// console.log(check);
// };

// Content

// let checkcontent = `<input type="checkbox" id="checkid"> `;

// let todoList = [
//   {
//     id: 1,
//     check: checkcontent,
//     todo: "Coding",
//   },
//   {
//     id: 2,
//     check: checkcontent,
//     todo: "Cooking",
//   },
// ];

// let contentdata = () => {
//   return (content.innerHTML = todoList
//     .map((x) => {
//       let { id, check, todo } = x;
//       return `
//       <div id="todo" class="todo"><span id="checkids">${check}</span><span>${id}.</span> ${todo}</div>
//     `;
//     })
//     .join(""));
// };
// let addtodo = contentdata();
// let checkid = document.getElementById("checkids");
// console.log(checkid);

// Incriment the left Todos
// var addTodo = () => {};

// Check Boxes
// let checkBoxes = () => {
//   if (checkid.checked === true) {
//     console.log("Checkbox is checked");
//   } else {
//     console.log("Checkbox is not checked");
//   }
// };

// Decriment the left Todos
// let clearTodo = () => {
//   if (checkid.checked === true) {
//     console.log(todoList[0].check);
//   }
//   console.log("clear todo");
// };

// Update the left Todos
// let update = () => {};

// let add = document.getElementById("add");
// let clear = document.getElementById("clear");
// let id = 0;
// let todoss = [];
// let todos;

// Add Todo List
// add.addEventListener("click", () => {
//   id++;
//   let todo = document.getElementById("todo");
//   let inputTodo = document.getElementById("input").value;

//   // Try
//   // let todocontent = todo.innerHTML = inputTodo

//   todo.innerHTML += check + id + ". " + inputTodo + "<br>";
//   todoss.push(id, inputTodo);
//   JSON.stringify(localStorage.setItem("data", content));

//   console.log(todo);
//   return todoss;
// });

// let todos = JSON.parse(localStorage.getItem("data"));

// todo.innerHTML = todos;
// console.log(todos);

// Clear Todo List
// clear.addEventListener("click", () => {
//   let checkid = document.getElementById("checkid");
//   if (checkid === true) {
//     console.log("Hi");
//   } else {
//     console.log(todoss);
//   }
// });

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
