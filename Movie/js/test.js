const hello = document.querySelector("#hello");
const plus = document.querySelector("#numUp");

let num = 0;
// 이게 안에 있으면 누를 때 마다 0으로 초기화되서 안 올라감.
function NumberUp() {
  
  num = num + 1;
  hello.innerText = `Total click : ${num}`;
}


plus.addEventListener("click", NumberUp);