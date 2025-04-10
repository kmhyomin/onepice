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