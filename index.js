let add = document.getElementById("add");
let clear = document.getElementById("clear");
let id = 0;
let todoss = [];

let check = `<input id="checkid" type="checkbox"> `;

// Add Todo List
add.addEventListener("click", () => {
  id++;
  let todo = document.getElementById("todo");
  let inputTodo = document.getElementById("input").value;

  // Try
  // let todocontent = todo.innerHTML = inputTodo

  let todos = (todo.innerHTML += check + id + ". " + inputTodo + "<br>");
  localStorage.setItem("data", todo);

  todoss.push(id, inputTodo);
  // console.log(todoss);
  return todoss;
});

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
