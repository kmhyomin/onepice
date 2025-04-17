# 2025.04.10. (11일차)

우오오오옹! 힘차고 쪼은 쓰껄rrr한 아침ㅁ!!!!!!!!!!!!!!!!!

```javascript
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
}// onGeoOk

function onGeoError() {
  alert("can't find you! No weather for you ㅠㅠ")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition => 사용자의 위치를 얻음.
```
# CSS
```css
html,body{
  margin: 0;
  padding: 0;
  color: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
ul,li{
  list-style: none;
}
input, button, textarea {
  border: none;
  background: none;
  outline: none;
  font: inherit;
}

.hidden {
  display: none;
}

.wrap{
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 50px black;
  overflow: hidden; /* 이거 지우면 우리 사이트 종말임*/
  /* 여백이 잘린게 아니라 삐져나간 이미지 때문에 생긴 의도치 않은 여백이 사라진 것. */
  /* 부모(wrap)의 경계보다 미묘하게 커지거나, 렌더링 특성상 1~2px빠져나감. 삐져나온 영역을 부모 밖이라 공간을 더 줘야하나? => 안예쁜 테두리 완성 */
  /* .wrap 입장에서 "내 자식이 밖으로 튀어나가면 다 잘라버릴게" 선언 => 브라우저도 더 이상 추가 공간을 만들 필요 없음(어차피 나가면 자를건데 추가영역을 와주노.) */
  text-align: center;
}
.wrap > img{
  display: block;
}
img{
  position: absolute;
  /* object-fit: cover; */
  /* 비율 안깨지게게 하는거 근데 안쓴게 더 귀여움*/
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 90%;
}

#clock {
  padding: 0;
  font-size: 100px;
  font-weight: 900;
  margin-top: 100px;
  margin-bottom: 0;
}


#weather{
  font-size: large;
  margin-left: 1200px;
  margin-top: 10px;
}

#greeting{
  width: 400px;
  font-size: 70px;
  margin: 10px auto 20px;
  font-weight: 320;
}
.greetingBackground{
  background-color: rgba(0, 0, 0, 0.699);
  border-radius:50px;
  box-shadow: 0 0 20px black;
}
#login-form > input{
  color: white;
  background-color: black;
  border-radius: 10px;
  opacity: 0.7;
  text-align: center;
}
#login-form > button{
  width: 80px;
  height: 25px;
  color: white;
  background-color: black;
  border-radius: 10px;
  opacity: 0.7;
  line-height: 25px;
  text-align: center;
}

#todo-form>input{
  display: block;
  width: 400px;
  margin: 10px auto;
  padding: 7px;
  color: white;
  background-color: black;
  border-radius: 10px;
  opacity: 0.7;
  text-align: center;
}

#todo-list{
  display: block;
  width: 400px;
  color: white;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
}

#todo-list>li{
  width: 100%;
  margin: 5px 0;
  background-color: rgba(0, 0, 0, 0.699);
}

#quote{
  margin-top: 100px;
  background-color: rgba(0, 0, 0, 0.301);
}
```

# React ==================================
>- `<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>`
>- `<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>`
>- React를 쓰기 위해 반드시 필요한 URL
>- `ReactDOM.render(btn);` => render-> 사용자에게 보여준다.

``` Jsx
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <div id="root"></div>
  <script type="text/babel">
    const root = document.getElementById("root");

    function Title() {
      return <h3 id = "Title" onMouseEnter = { () =>console.log("mouse Enter!")}>
        HI i'm Title
      </h3>
    };

  const Button = () =>  (
    <button style={{
    backgroundColor : "red",
    }}
    onClick={() => console.log("i'm clicked")}>
    Click Me
  </button>
  )

    const Container = () => (
    <div>
      <Title /> 
      <Button />
      {/* 직접 만든 컴포넌트의 첫 글자는 반드시 대문자. 만약 소문자면 React나 JSX는 HTML button태그라 생각할 것. */}
     </div>
    );
      ReactDOM.render(<Container />,root); 
  </script>
</body>
</html>
```
## `function Title()` **===** `() =>`

``` Jsx
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <div id="root"></div>
  <script type="text/babel">
    const root = document.getElementById("root");
    
    let counter = 0;
    function countUp() {
      counter = counter + 1;
      render();
      // 위의 render말곤 재랜더링을 해주는게 없기 때문에 여기서 한 번 더 호출함.
    }
    function render(params) {
      ReactDOM.render(<Container />,root); 
      // 앞을 뒤에 담아줌
    }
    const Container = () => (
    <div>
      <h3> Total clicks : {counter}</h3>
      <button onClick={countUp}>Click Me</button>
     </div>
    );
    render();
  </script>
</body>
</html>
```