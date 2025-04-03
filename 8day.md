# 2025.04.03 (8일차)

정재연 팀장님이 추천해주신 사이트로 공부중..


```javascript
const title = document.querySelector(".hello h1");
                      //  퀴리 셀렉터는 id, class, h1등 상관 없이 다 불러올 수 있다.
                      //  하지만 어떠한 속성인지는 적어둘 것. (#, .)


                                            
function hadletitleclick(){
  console.log("title was a click");
  title.style.color = "red";
  title.innerText = "hehehe"
}

function hadleMouseEnter() {
  title.innerText = "mouse In!"
}

function hadleMouseLeave() {
  title.innerText = "mouse out!"
  
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("you copyed right?");
}
function handleWindowOffline() {
  alert("NO!! YOUR WIFI!!!");
}
function handleWindowOnline(params) {
  alert("wellcome Back due!");
}

title.onclick=hadletitleclick;
// ^^ 이벤트 리스너 = 말 그대로 이벤트를 인식하는 것. 클릭 -> handletitleclick 동작

title.onmouseenter = hadleMouseEnter;
title.onmouseleave = hadleMouseLeave;


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
```
```javascript
const title = document.querySelector(".hello h1");

function hadletitleclick(){
  const currentColor = title.style.color;
  // 현재의 색상 저장
  let newColor = "";
  // let은 바뀔 수 있는 것 = 뭐가 들어올테니 비워둠.
  if (currentColor === "blue") {
    // 만약 현재 색상이 파랑색이라면
    newColor = "red";
    // 새 색상에 빨강을 저장해라.
  }else{
    newColor ="blue";
    //  ''
  }
  title.style.color = newColor;
  // title의 색을 새 색으로 바꿔라.
}

title.onclick=hadletitleclick;
```


```javascript
const title = document.querySelector(".hello h1");

console.dir(title);
function hadletitleclick(){
  const clickedClass = "active";
  if(title.classList.contains(clickedClass)){
    title.classList.remove(clickedClass);
  }else{
    title.classList.add(clickedClass);
  }
  // active 클래스가 잘 지우고 넣어지나 확인함.

}

title.onclick = hadletitleclick;
```


중요한 개념이니 밑의 [영상](https://nomadcoders.co/javascript-for-beginners/lectures/2901)을 보고 다시 복습하자.
```javascript
const loginFrom = document.querySelector("#lofin-form");
const loginInput = document.querySelector("#lofin-form input");
// querySelector를 쓸 땐 자료형 정확히 입력 할것.


loginInput.focus();

function onLoginSubmit (event) {
  event.preventDefault();
  // 기본 행동 => 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작.
  // form은 submit가 되면 창을 새고고침 하는데, preventDefault function으로 막고 있음.
  // preventDefault => 어떤 event의 기본 행동이든 발생됮 않도록 막는 역할을 함.
  console.log(loginInput.value);
  loginInput.focus();
};


loginFrom.addEventListener("submit", onLoginSubmit);
                                         // ^^ Submit는 엔터를 누르거나, 버튼을 클릭할 때 발생.
onLoginSubmit(asdasd);
```