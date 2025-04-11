# 2025.04.11 (12일차)

끝내야한다..!

React를 사용하는 이유 =>  필요한 곳만 런더링 함 -> 인터랙티브()한걸 만들기에 최적화 되있음.
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
    
    function App(){
      const  [counter, modifier] = React.useState(0) // React.useState 함수는 초기값 설정 O
      // 위는 log했을 때 (2) [0, ƒ]라는게 뜨는데 첫번째 값은 초기값이고 두번째 값은 그 값을 바꾸는 함수
      
      return (
        <div>
          <h3>Total clicks : {counter}</h3>
          <button>Click Me</button>
        </div>
      );
    };
    
    ReactDOM.render(<App />,root); 
  </script>
</body>
</html>
```
2 4
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
    
    function App(){
      const  [counter, setCounter] = React.useState(0) 
      const onClick = () => {
        setCounter(counter+1);
        // modifier안에서 counter를 123456789로 바꾸고 제랜더링을 하는게 일어남
      };
      return (
        <div>
          <h3>Total clicks : {counter}</h3>
          <button onClick={onClick}>Click Me</button>
        </div>
      );
    };
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />,root); 
  </script>
</body>
</html>
```

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
    
    function App(){
      const  [counter, setCounter] = React.useState(0) 
      const onClick = () => {
        setCounter((current) => current + 1); 
      };
      return (
        <div>
          <h3>Total clicks : {counter}</h3>
          <button onClick={onClick}>Click Me</button>
        </div>
      );
    };
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />,root); 
  </script>
</body>
</html>
```
### State를 바꾸는 방법
>- 1. set모시깽이 를 이용하여 원하는 값을 넣는 방법
>- 2. 이전 값을 이용해서 현재값을 계산해내는 것
>  set모시깽이 안에 함수를 하나 더 넣어서 그걸 반환하면 값이 바뀜
> const  [counter, setCounter] = React.useState(0) <br>
> const onClick = () => {<br>
> setCounter(current => current + 1);<br>};
>- 방법 2가 더 안전함 => set모시깽이 안의 변수가 확실히 현재 값이라는 걸 보장하고 있기 때문
>- 현재 state랑 관련이 없는 값을 새로운 state로 하고싶은 경우에는 (1)
>- 현재 state에 조금의 변화를 주어서 새로운 state를 주고 싶은 경우에는 (2)

3.5
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
    
    function App(){
      const [minutes,setMinutes]= React.useState();
      const onChange = (event) => {
        setMinutes(event.target.value);
        
      };
      return (
        <div>
          <h1>멋진 변환기</h1>
          <label htmlFor="minutes">minutes </label>
          <input value={minutes} id="minutes" placeholder = "분" type ="number" onChange={onChange} />
          <h4>You want convert {minutes}</h4>
          <label htmlFor="hour"> hour</label>
          <input id="hour" placeholder = "시간" type ="number" />

        </div>
      );
    };
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />,root); 
  </script>
</body>
</html>
```

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
    
    function App(){
      const [minutes,setMinutes]= React.useState();
      // 여기에 초기 값을 미리 설정한뒤 onChange가 없으면 값이 업데이트 되지 않고, useState의 특성 상 값이 바뀔 때마다 랜더링을 하기 때문에 안 바뀜
      const onChange = (event) => {
        setMinutes(event.target.value);
        
      };
      return (
        <div>
          <h1>멋진 변환기</h1>
          <label htmlFor="minutes">minutes </label>
          <input value={minutes}
            id="minutes" {/*input을 외부에서도 수정할 수 있게 연결함*/}
            placeholder = "분"
            type ="number"
            onChange={onChange}
          </input>
        </div>
          <div>
            <label htmlFor="hour"> hour</label>
            <input 
              value={minutes} 
              id="hour" 
              placeholder = "시간" 
              type ="number" 
            />
          </div>
          

        
      );
    };
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />,root); 
  </script>
</body>
</html>
```
2.7
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
    
    function App(){
      const [minutes,setMinutes]= React.useState();
      const onChange = (event) => {
        setMinutes(event.target.value);
      };
      const reset = () => setMinutes(0);
      return (
        <div>
          <div>
            <h1>멋진 변환기</h1>
            <label htmlFor="minutes">minutes </label>
            <input value={minutes} id="minutes" placeholder = "분" type ="number" onChange={onChange} />
          </div>
          {/*minutes에선 수정이 가능하지만 hour에선 불가능 함 => onChange를 안줬기 때문*/}
          <div>
            <label htmlFor="hour"> hour</label>
            <input value={Math.round(minutes/60)}  id="hour"  placeholder = "시간" type ="number" />
          </div>
          <button onClick = {reset}>Reset</button>
        </div>
      );
    };
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />,root); 
  </script>
</body>
</html>
```
# [크아아아ㅏ아가ㅏ가각가ㅏㄱ!!](https://nomadcoders.co/react-for-beginners/lectures/3273)
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
    
    function App(){
      const [amount,setAmount]= React.useState(0);
      const [inverted,setInverted]= React.useState(false);

      const onChange = (event) => {
        setAmount(event.target.value);
      };

      const reset = () => setAmount(0);
      const onInvert = () => {
        reset();
        setInverted((current) => !current); // fliped 값을 반대로 전한 시키는 역할. () =>은 한 줄만 쓰기 때문에 {} 생략
      }

      return (
        <div>
          <div>
            <h1>멋진 변환기</h1>
            <label htmlFor="amount">분 => </label>
            <input 
            value={inverted ? Math.round(amount*60) : amount } 
            id="minutes" 
            placeholder = "분을 적으세용" 
            type ="number" 
            onChange={onChange} 
            disabled={inverted}
          />
          </div>

          <div>
            <label htmlFor="hour"> 시간 => </label>
            <input 
            value={inverted ? amount : Math.round(amount/60)}  
            id="hour"  
            placeholder = "시간을 적으세용" 
            type ="number" 
            disabled={!inverted} 
            onChange={onChange}
          />
          </div>
          <button onClick = {reset}>리셋하기</button>
          <button onClick = {onInvert}>{inverted ? "Trun back!" : "inverted?"}</button>
        </div>
      );
    };
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />,root); 
  </script>
</body>
</html>
```
``` Jsx

```
``` Jsx

```
# 기초지식
> ## 알아야 한다! (Must!)
>>0. Javascript 모던자바스크립트 딥다이브
>>1. 브라우져 라이프 사이클! - useEffect **didMount** 
>>2. 상태관리 - redux 어려움 => 객체 불변성(메모리)??
>## 알면 된다! (should!)
>>1. 컴포넌트가 무엇인지?
>>2. SPA 가 무엇인지?
>>3. fetch => axios

>>4. 레이어드 아키텍쳐 ==> 모듈화 규칙( 결합도, 응집도 )
>>5. 좋은코드가 뭐냐 ==> 유지보수가 편한 코드
>>6. 디자인 패턴??

