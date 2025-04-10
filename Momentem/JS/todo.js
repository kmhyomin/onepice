const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = []; 

function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function dileteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // li.id는 typeof하면 string이라 int로 바꿔줌.
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click",dileteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function hadleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; 
  toDoInput.value= "";
  const newToDoObj = {
    text:newToDo,
    id:Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",hadleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos= parsedToDos;
  parsedToDos.forEach(paintToDo);
}

