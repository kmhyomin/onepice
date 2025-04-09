# 2025.04.09. (10일차)
이제야 js끝나가는중 = > 개폐급;;

오늘은 ToDoList의 할일 목록 지우는 것 부터.
```javascript
function dileteToDo(event) {
  const li = event.target.parentElement;
                          // ^^ 클릭된 Element의 부모
  li.remove();
  // event.target을 하면 클릭된 이벤트에서 target을 갖고옴 = 특정 1단계. 그곳에서 parentElement를 갖고옴 = > 이벤트가 일어난 Element의 부모 요소를 찾음 => li
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click",dileteToDo);
  li.appendChild(span);
  li.appendChild(button); //appen는 맨 마지막에 놓여져야함.
  toDoList.appendChild(li);
}
```
# todo저장하기
```javascript
const toDos = [];
// localStorage엔 array를 저장할 수 없음. 텍스트만 저장 가능

function saveToDos() {
  localStorage.setItem("todos",JSON.stringify(toDos));
  // JSON.stringify object든 array든 string으로 바꿔줌.
}

function dileteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click",dileteToDo);
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function hadleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; 
  toDoInput.value= "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit",hadleToDoSubmit);
```

# todo 지우기기 [이해 안되면](https://nomadcoders.co/javascript-for-beginners/lectures/2918)
```javascript
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function dileteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit",hadleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // forEach => 배열 안에 있는 아이템들을 하나씩 꺼내서 어떤 일을 하게 해주는 함수.
  // forEach는 배열 반복할 때 씀
  // 하나씩 꺼내서 함수 안에서 처리함
  // for보다 더 깔끔하고 읽기 쉬움
  // to-do 리스트처럼 아이템 하나하나 출력하거나 렌더링할 때 자주 씀!
  console.log(parsedToDos);
  parsedToDos.forEach((item) => {console.log(`이건 ${item}`)});
}
```
# [이해 안되면](https://nomadcoders.co/javascript-for-beginners/lectures/2919)
```javascript
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
  // localStorage에는 array를 저장할 수 없으니 JSON.stringify로 string으로 바꿈.
}

function dileteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit",hadleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos= parsedToDos;
  parsedToDos.forEach((item) => {console.log(`이건 ${item}`)});
}
```
# [이해 못하겠으면](https://youtu.be/bTx08ox0zA8?si=xr2ET-pXEEiiBurA&t=311)
```javascript
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// 새로고침을 할때 todos들이 날아가는 건 새로고침을 하면 toDos는 항상 빈 배열([])로 다시 시작하기 때문
// 그래서 변경 불가한 const가 아닌 상시변경 let으로 바꾸면 --> 47행

function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function dileteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
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
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit",hadleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // 그리고 여기서 꺼낼 때 parse를 써서 다시 array로 변경하는 것. 
  toDos= parsedToDos;
  // localStore에 toDo가 들어있을때 toDos에 parsedToDos를 넣어서 전에 있던  toDo들을 복원 함 추가로 받아들이는게 가능
  parsedToDos.forEach(paintToDo);
}
```
# [크아악](https://youtu.be/Wsel3PlJsTU?si=1LYhUzLX20oysN6I&t=19)
```javascript
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// local storage는 toDos를 복사 하고 있을 뿐, toDos와 local storage는 같지 않다. 

function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function dileteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  // newToDoObj으로 인해 이제부턴 text가 아닌 object로 받게 됨.
  li.id = newToDo.id;
  // li에 id 값을 설정
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  // span의 innerText를 newToDo의 text로 넣으라는 말
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
    // Date.now()는 밀리초(1000분의 1초)를 주는 함수. 거의 랜덤과 비슷함.
  };
  // 입력 받을 때 array 자료형으로 받아 문자와 Date.now()로 받은 고유 id를 local storage에 저장함. 
  toDos.push(newToDoObj); // 위의 값을 toDos에 입력
  paintToDo(newToDoObj); // 위의 값을 paintToDos로 보냄.
  saveToDos();
}

toDoForm.addEventListener("submit",hadleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos= parsedToDos;
  parsedToDos.forEach(paintToDo);
  // forEach는 paintToDo를 기본적으로 실행함. 
  // forEach는 각각의 아이템을 줌 -> 그 item이 이젠 object가 됨(newToDoObj)
}
```
## filter
>- `[1,2,3,4].filter(vlfxj)`
>- filter는 forEach와 비슷하다.
>- 1,2,3,4순으로 호출함.
호출 할때 value만 호출하는게 아닌 vlfxj에 1,2,3,4를 집어넣음.
>-만약 새 array에서 object를 유지하고 싶으면 vlfxj함수는 반드시 ture를 리턴해야함.
>-만약 false를 리턴하면 그 item은 새 array에 포함되지 않음. => 한번에 호출 X. js가 vlfxj를 4번 호출하는 것.
>- => 3번에 false가 return되면 1,2,4만 호출하고 나머지는 유지됨
>- ====>>> araay의 item을 유지하고 싶으면 true를 리턴해야함.
>- 반대로 지우고 싶다면? => false 리턴
>- `arr.filter(item => item >2)` 이런식으로 function을 쓰지 않고도 만들 수 있음.

# local Storage까지 지우기
```javascript

function dileteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(li.id);  
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // li.id는 typeof하면 string이라 int로 바꿔줌.
  saveToDos();
}
```
## 왜 saveToDos를 한번 더 호출할까?
>- local storage는 자동저장이 아님 => toDos에 변경이 일어났다해도 저장되지 않음. 
>- 고로 saveToDos를 한번 더 호출 함으로서 변경후 toDos로 업데이트 해주는 것.
>- 안쓰면 스듀 미라마냥 새로고침 뒤에 부활함.

# weather.js
```javascript
function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude; 
  const lng = position.coords.longitude;
  console.log(`you live it ${lat} and ${lng}`);
  
  
  
}
function onGeoError() {
  alert("can't find you! No weather for you ㅠㅠ")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition => 사용자의 위치를 얻음.
```

```javascript

```

```javascript

```

```javascript

```