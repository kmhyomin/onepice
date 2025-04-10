const loginForm  = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


// vv만든 스트링이 반복되서 사용 된다면 변수로 만든 뒤 사용 -> 변수 명이 틀린건 js가 알려줌. 문자열은 신경 안씀.
const USERNAME_KEY = "userName";
const HIDDENCLASSNAME = "hidden";

loginInput.focus();

function onLoginSubmit (event) {
  event.preventDefault();
  loginForm .classList.add(HIDDENCLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
  //  ----------------------------------------------------------------
  loginInput.focus();
};

function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}`; 
  // ^^ USERNAME_KEY 이거 쓰면 그냥 userName하고 깡으로 나와버림, 꼭 입력 받은 걸로 넣어야함.
  greeting.classList.remove(HIDDENCLASSNAME);
}

// 해설하려면 html부터 보고 와라
const saveUserName = localStorage.getItem(USERNAME_KEY);

if ( saveUserName === null) {
  loginForm .classList.remove(HIDDENCLASSNAME);
  loginForm .addEventListener("submit", onLoginSubmit);
}
else{
  paintGreetings(saveUserName);
}