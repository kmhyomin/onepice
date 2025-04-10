const API_KEY = "300d3812fedc66286b36fae699b66c04";

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude; 
  const lon = position.coords.longitude;
  console.log(`you live it ${lat} and ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}℃`;
    
  }); // => 인터넷에 있는 url을 가져와서, JSON(우리가 읽을 수 있는 방식)으로 바꿔줘.
  // fetch(웹에서 데이터 받아오는 명령어)는 promise이다. promise란 당장 뭔가 일어나지 않고 딜레 후에 일어남.
  //fetch()는 비동기 작업 (딜레이 후 작업). then를 붙이면 그 결과값을 갖고 이거 해줘. 라는 뜻.
}
function onGeoError() {
  alert("can't find you! No weather for you ㅠㅠ")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition => 사용자의 위치를 얻음.

