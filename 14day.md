# 2025.04.17. (14일차)

>- creat react app => 개발 서버에 접근, 자동 새로고침, 즉각적인 css 반영등의 기능을 수행함.

### npm 패키지 이름 규칙 
>- 모두 소문자
>- 공백 안됨
>- 문자 안됨
>- 특수문자 제한 (보통 하이픈(-)과 밑줄(_)만 허용)

```JSX
export default Button;
// 모듈에서 하나의 기본 값을 외부로 내보낼 때 사용하는 문법
```

### App.js
```JSX
import {useState, useEffect} from "react";


function App() {
  const [counter, setValue] = useState(0);

  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all the time');

  const iRunOnlyOnce = () =>{
    console.log("i run only once");
    
  }
  useEffect(iRunOnlyOnce,[]);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}> 눌러 </button>
    </div>
  );
}

export default App;
```

```JSX

// import Button from "./Button"
// import styles from "./App.module.css";
import {useState, useEffect} from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once");
  },[]);

  useEffect(() => {
      console.log("'keyword' is changed");
  },[keyword]);
  useEffect(() => {
      console.log("'counter' is changed");
  },[counter]);
  useEffect(() => {
      console.log("'counter' and 'keyword are changed");
  },[counter,keyword]);
  // counter나 keyword 중 아무거나 동작하면 실행
  // 특정 코드만 변화 되었을 대 원하는 코드만 실행하는 법
  // [] 안에 움직이고 싶은 코드의 이름을 넣어 keyword만! 실행할꺼야~ 하는 것.
  
  useEffect(() => {
    console.log();
    
  },[counter])
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}> 눌러 </button>
    </div>
  );
}

export default App;
```

```
useEffect(() => {
    console.log("i run only once");
  },[]);
```
[] => 이걸 dependency라고 부르는데 react가 지켜봐야 할 것 이라는 뜻이다.


#### cleanUp function
return에 파괴 되었을 때 실행되길 원하는 fn을 넣으면 작동함.
```JSX
import {useState, useEffect} from "react";

function Hello(){

  useEffect( function(){
    console.log("HI! :)");
    return () => console.log("bye.. :(");
  } ,[]);

  useEffect( () => {
    console.log("HI! :)");
    return function(){
      console.log("bye.. :(");
    };
  } ,[])
  return <h1>hi!!!!</h1>
  // component가 destroy되었을 때도 코드 실행 O
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
     <button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
    </div>
  );
}

export default App;
```
# 본격 시작!
[수정하는 함수를 사용 할 때의 두가지 옵션](https://youtu.be/hvHML11CFaQ?si=IADtGcF3g6-W7_Ab&t=20)
1. 값을 보내는 방법 `setToDo("");` 사용
2. 함수를 보내는 방법 `setToDos((currentArray) => [toDo, ...currentArray]);`
```
```

```JSX
```

```JSX
```

```JSX
```

```JSX
```