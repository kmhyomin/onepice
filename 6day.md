# 2025.03.18 (6일차)

[별코딩](www.youtube.com/@starcoding)으로 React Hook에 대해 공부했다.

> #### npm start를 했는데 이미 포트에서 실행하고 있다고 뜬다면
>1. 포트 번호 복사하기 => `√ Something is already running on port **3000**.`
>2. 복붙 => `netstat -ano | findstr :3000`
>3. PID번호 찾기 => `TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       **2580**`
>4. 강제종료 명령어 복붙 => `taskkill /PID 번호 /F`

# useStaste Hook

Hook => (class를 작성 안해도 state와 다른 React의 기능 사용 O)

```javascript
import { useState } from 'react';


const heavyework = () => {
  console.log("무거운작업");
  return["홍길동","김민수"];
};
//^^ 무거운 작업이 어디서 실행되는지 확인함.

function App() {
  const [names, setNames] = useState (() => {
    return heavyework();
  });
```

> - 컨퍼런트가 **계속 재랜더링** _(Upload을 누르면)_ 되는데 이때 무거운 작업을 하는 함수가 계속해서 다시 불려옴 <br> **_=> 비효율적_**
> - 콜백을 넣어서 return 값으로 무거운 작업을 해주는 걸 호출해주면 **처음 화면이 랜더링 될 때만** 무거운 작업이 실행되고 _더이상 불필효한 동작이 일어나지 않음_. <br>
>   **=>초기값을 가져올 때 무거운 작업이 같이 된다면 값을 바로 넣지 말고 _콜백으로 값을을 리턴_ 해주면 됨.**

```javascript
 const [input, setInput] = useState("");

 const handleInputChange = (e) => {
   setInput(e.target.value);
 };

 const handleUplode = () => {
   setNames((prevState) => {
     console.log('이전 state : ',prevState)
     return([input, ...prevState]);
   })
 };

 // console.log(input)
 return (
   <div>
     <input type='text' value={input} onChange={handleInputChange}></input>
     <button onClick={handleUplode}>Upload</button>

     {names.map((name, idx) => {
       return <p key={idx}> {name}</p>
```

> - names 배열을 돌며 아이템(홍길동, 김민수등) 하나하나 출력한 것이다.
> - React에서 _map을 써서 엘리멘트를 출력_ 하고 싶으면 **_key가 꼭 있어야한다_**.

```javascript
     })}


   </div>
 );
}

export default App;
```

> - 정리
>   > 1. **state**를 **변경**할 때마다 **컴퍼런트**는 **재렌더링**됨
>   > 2. **state를 변경할 때** 새로 변경될 state값을 쓸 때 **기존 state와 연관이 있다**면 setState의 값을 새 state의 인자로 리턴하는게 좋다 **(콜백)**
>   > 3. useState를 사용해서 초기값을 가져올 때 무거운 일을 해야한다면 useStae인자로 콜백함수를 넣어주면 맨처음 랜더링 할때만 실행된다.

# 원문

>

```javascript
import { useState } from "react";

const heavyeWork = () => {
  console.log("무거운작업");
  return ["홍길동", "김민수"];
};
// ^v 기본값을 바로 넣지 않고 heavy에 넣어 초기 제외 재렌더링 방지 기능을 해줌
function App() {
  const [names, setNames] = useState(() => {
    return heavyeWork();
  });

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    // ^^ 인자로는 e(이벤트)를 받음
    setInput(e.target.value);
    // . => ~안에 있는
  };
  // console.log(input)
  const handleUplode = () => {
    setNames((prevState) => {
      console.log("이전 state : ", prevState); // <- console.log에서 prevState에 들어있는 값 확인
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}></input>
      <button onClick={handleUplode}>Upload</button>

      {names.map((name, idx) => {
        return <p key={idx}> {name}</p>;
        // ^^names 배열을 돌며 아이템 하나하나 출력한것이다.
        // React에서 map을 써서 엘리멘트를 출력하고 싶으면 key가 꼭 있어야한다.
      })}
    </div>
  );
}

export default App;
```

# [***useEffect***](https://www.youtube.com/watch?v=kyodvzc5GHU&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=2)

> 용어정리
> > - **마운트** : 화면에 첫 랜더링
> > - **업데이트** : 재랜더링
> > - **언마운트** : 화면에서 사라질 때
>
> 개념정리
>
> > - 특정 작업을 처리해줄 코드를 쓰고 싶다면 쓰는 코드이다.
> > - useEffect Hook은 기본적으로 콜백함수와 인자를 활용함 => `useEffect(() => { // 작업})`
>
> - useEffect의 형태

```javascript
//1번 ->  useEffect의 첫번째 인자로 하나의 콜백 인자만 받음
// 랜더링 될 때마다 실행
useEffect(() => {
  //작업물;
});

//2번 -> useEffect의 첫번째 인자로 콜백, 두번째로 배열을 받음
// 맨 처음 화면에 **첫 랜더링**이 될 때, **value값이 바뀔 때** 실행.
// value값이 **공백이면 맨 처음에만** 랜더링
useEffect(() => {
  //작업물;
}, [value]);
```

> **_clean Up_** => 정리
>
> - useEffect의 return값을 넣으면 됨

```javascript
useEffect(() => {
  // 동작하는거
  return () => {
    //동작중지
  };
}, []);
```

# 원문1

```javascript
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const hadleCountUpdate = () => {
    setCount(count + 1);
  };

  //랜더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log("랜더링");
    //이 안에 조금이라도 무거운 작업이 들어간다면 매우 비효율적이게 됨.
  });

  // 마운팅 + count가 변경 될 때만 랜더링 됨
  useEffect(() => {
    console.log("count 랜더링~");
  }, [count]);

  // 마운팅 + [name가 변경 될 때만 랜더링 됨
  useEffect(() => {
    console.log("name 랜더링~");
  }, [name]);

  useEffect(() => {
    console.log("이힝~");
  }, []);
  // useEffect를 맨 처름 랜더링 될 때만 동작하게 하고 싶다면 디펜던스 어레이를 비워두면 된다.

  return (
    <div>
      <button onClick={hadleCountUpdate}> upDate </button>
      <span> count : {count} </span>
      <input type="text" value={name} onChange={handleInputChange}></input>
      <span> name : {name} </span>
    </div>
  );
}

export default App;
```

# 원문2

> ## file/APP.js
>
> ```javascript
> import { useState, useEffect } from "react";
> import Timer from "./component/Timer";
> function App() {
>   const [showTimer, setshowTimer] = useState(false);
>
>   return (
>     <div>
>       {showTimer && <Timer></Timer>}
>       <button
>         onClick={() => {
>           setshowTimer(!showTimer);
>         }}
>       >
>         {" "}
>         Toggle Timer{" "}
>       </button>
>     </div>
>   );
> }
>
> export default App;
> ```

## file/Timer.js

> ```javascript
> import { useState, useEffect } from "react";
>
> function App() {
>   useEffect(() => {
>     const Timer = setInterval(() => {
>       console.log("타이머 돌아가는 중...");
>     }, 1000);
>
>     return () => {
>       clearInterval(Timer);
>       console.log("타이머가 종료 되었습니다, 다시 만나요!");
>     };
>   }, []);
>
>   return (
>     <div>
>       <span> 타이머를 시작합니다. 콘솔을 보세요!</span>
>     </div>
>   );
> }
>
> export default App;
> ```


