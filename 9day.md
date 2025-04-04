# 2025.04.04 (9일차)
여전히 공부중..

```javascript
const link = document.querySelector('a');

// 뭐가 클릭 되었는지, 어디가 클릭 되었는지 알고 싶을 땐 함수를 실행시키는 동시에 첫번째 인자로 objet를 넣으면 event에 대한 정보가 나온다. vv
function hadleLinkClick(event) {  
  event.preventDefault();
  console.dir(event);
  alert("click!");
  // ^^ alert는 모든 동작을 막음 = > 자주사용 X.
  
};

link.addEventListener("click",hadleLinkClick);
```
```javascript
const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hi = document.querySelector("#hi");

const HIDDEN_CLASSnAME = "hidden";

loginInput.focus();
function onLoginSubmit (event) {
  event.preventDefault();
   loginFrom.classList.add(HIDDEN_CLASSnAME);
   const userName = loginInput.value;
   console.log(userName);
   hi.innerText = `Hello ${userName}`;
  //  string + function = `글자 ${변수}`;
   hi.classList.remove(HIDDEN_CLASSnAME);





  loginInput.focus();
};

loginFrom.addEventListener("submit", onLoginSubmit);
                                         // ^^ Submit는 엔터를 누르거나, 버튼을 클릭할 때 발생.
```

```javascript
const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hi = document.querySelector("#hi");

const HIDDEN_CLASSnAME = "hidden";

loginInput.focus();
function onLoginSubmit (event) {
  event.preventDefault();
   loginFrom.classList.add(HIDDEN_CLASSnAME);
   const userName = loginInput.value;
   localStorage.setItem("userName", userName);
  //  ^^ 유저의 이름을  개발자 모드 -> 애플리케이션의 로컬 스토리지에 입력받은 문자열을 저장함.
   hi.innerText = `Hello ${userName}`;
  //  string + function = `글자 ${변수}`;

  loginInput.focus();
};

loginFrom.addEventListener("submit", onLoginSubmit);
                          // ^^ Submit는 엔터를 누르거나, 버튼을 클릭할 때 발생.
```

## 이거 중요한 개념
```javascript
const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// 만든 스트링이 반복되서 사영 된가면 변수로 만든 뒤 사용 -> 변수 명이 틀린건 js가 알려줌. 문자열은 신경 안씀.
const USERNAME_KEY = "userName";

const HIDDENCLASSNAME = "hidden";

loginInput.focus();

function onLoginSubmit (event) {
  event.preventDefault();
   loginFrom.classList.add(HIDDENCLASSNAME);
   const userName = loginInput.value;
   localStorage.setItem(USERNAME_KEY, userName);
   paintGreetings(USERNAME_KEY);
// ----------------------------------------------------------------
  loginInput.focus();
};

function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}`; 
  // ^^ USERNAME_KEY 이거 쓰면 그냥 userName하고 깡으로 나와버림, 꼭 입력 받은 걸로 넣어야함.
  greeting.classList.remove(HIDDENCLASSNAME);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if ( saveUserName === null) {
  loginFrom.classList.remove(HIDDENCLASSNAME);
  loginFrom.addEventListener("submit", onLoginSubmit);
}
else{
  paintGreetings(saveUserName);
}
```
>🧠 핵심 질문: **왜 const userName = loginInput.value;를 함수 안에서 써야 해? 밖에 쓰면 안 돼?**
>
>🤔 이유는 이거야: 
>1. **초기엔 input에 아무것도 없음**
>- 코드가 처음 실행될 때, *input은 빈칸*이야.
>- 그래서 함수 *밖에서* loginInput.value를 *가져오면* 그냥 *""(빈 문자열)*이 들어감.
>2. **우리가 원하는 건 “submit 할 때의 값”**
>- 사용자가 input에 글을 쓰고 *submit 버튼 누르는 그 순간의 값을 저장*해야 해.
>- 그러니까 *submit 이벤트가 발생했을 때* (즉, onLoginSubmit 함수가 호출될 때) *input 값을 읽어야 정확*해.
>3. **submit 이벤트 안에서 실행해야 *'방금 입력한 값'*을 가져올 수 있음**
>- 함수 안에서 loginInput.value를 읽으면 사용자가 진짜 방금 쓴 내용을 가져오는 거야!
>- 그걸 localStorage에 저장해야 나중에도 기억할 수 있어.

## clock.js
```javascript
const clock = document.querySelector("#clock");


function getClock() {
  const date = new Date();
  // 이걸로 밑에서 쓰이는 vvdate를 선언해줌. 사실상  new Date().getHours(); 라는 소리.
  const hours = String(date.getHours()).padStart(2,"0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${Minutes}:${Seconds}`;

}

getClock();
setInterval(getClock, 1000);

// padStart => 원하는 만큼의 글자수를 지정함. (앞에 붙이는 기능). 원형-> padStart(수량, "넣을 글자");
// 수량 = 2, 글자 = "0" 이라면, hours의 글자 수는 2가 되어야 하는 것으호 정하고, 그렇지 않으면 앞에 0을 붙임.
// padEnd 뒤에 붙이거는거.
```

## quotes.js
```javascript
const quotes = [
  {quote: "Believe you can and you're halfway there.",
    author : "Theodore Roosevelt",
  },
  {quote: "It always seems impossible until it’s done.",
    author : "Nelson Mandela",
  },
  {quote: "Don’t watch the clock; do what it does. Keep going.",
    author : "Sam Levenson",
  },
  {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author : "Winston Churchill",
  },
  {quote: "Start where you are. Use what you have. Do what you can.",
    author : "Arthur Ashe",
  },
  {quote: "Every day may not be good, but there is something good in every day.",
    author : "Alice Morse Earle",
  },
  {quote: "You miss 100% of the shots you don't take.",
    author : "Wayne Gretzky",
  },
  {quote: "Happiness is not something ready made. It comes from your own actions.",
    author : "Dalai Lama",
  },
  {quote: "In the middle of every difficulty lies opportunity.",
    author : "Albert Einstein",
  },
  {quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author : "Franklin D. Roosevelt",
  },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuotes.quote;
author.innerText = toDayQuotes.author;
```
## background.js
```javascript
const imgs = ["0.jpg","1.jpg","2.jpg"];

const randomImgs = imgs[Math.floor(Math.random() * imgs.length)];

const bgimages = document.createElement("img");

bgimages.src = `img/${randomImgs}`;

console.log(bgimages);

document.body.appendChild(bgimages);
```
## toDo.js_______(1)
```javascript
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function hadleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value= "";
  // toDoInput.value가 비워진다고 해서 newToDo가 비워지는 건 아님. => newToDo는 단순 그 값을 복사하기 때문. 그래서 위에 적어야함. 복사하기 전에 사라지면 안되니까.
}

toDoForm.addEventListener("submit",hadleToDoSubmit);
```
## toDo.js_______(2)
```javascript
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span); // li가 span이라는 child를 갖게 됨.
  span.innerText = newToDo;
  toDoList.appendChild(li);
  
}

function hadleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // input의 value를 비루기 전의 값을 나타내는 string임. 그 입력값을 paintToDo에 넣어서 호풀하는 것.
  toDoInput.value= "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit",hadleToDoSubmit);
```