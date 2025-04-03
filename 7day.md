# 2025.04.02. (7일차)

[별코딩](www.youtube.com/@starcoding)으로 React Hook에 대해 공부했다.


# [useRef](https://www.youtube.com/watch?v=VxqZrL4FLz8&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=3)
>- 원형 : `const ref = useRef(값)` => 이 함수형 래퍼런스에서 **ref를 부르면 useRef를 반환**해 준다.
>- ref object는 **언제든 수정** 가능.
> *반환된 Ref*는 컴퍼런트의 *전 생애주기를 통해 유지* 된다. => 컴퍼런트가 **언마운트 되기 전까지 유지됨**
>> 쓰임새 
>>- **저장공간** : *Ref의 변화 -> 랜더링 X -> 변수값 유지* (*재랜더링 된다 하여도 그 안의 값은 변경되지 않음*)
>>- **Dom 요소에 접근** : 예를 들어 마우스로 클릭하지 않아도 자동으로 로그인 창에 커서가 깜빡이는 작업(focus)을 할 수 있음 => input 요소를 클릭하지 않아도 focus를 사용하여 바로 정보를 입력 O

# 원문1 (State와 Ref의 차이점)
```javascript
import { useState, useRef } from 'react';


function App() {
  const [num, setNum] = useState(0);
  const countRef = useRef(0);

  console.log(countRef); //Ref 안에 있는 값에 접근하고 싶을 때 -> countRef.current
  console.log("랜더링...");

  const handleClickState = () => {
    return(setNum(num + 1));
  };
  const handleClickRef = ()=> {
    countRef.current = countRef.current + 1;
    console.log('Ref : ',countRef); // Ref가 증가 하는지 보는거. 아무리 실행시켜도 랜더링은 안되서 화면에는 재랜더링 전까진 안 나옴.
  };

  return (
    <div>
      <p> state : {num}</p> {/* span 태그 달면 같은 줄에 버튼이 생김. p는 block이고 span은 inline요소라 그럼 */}
      <p> Ref : {countRef.current} </p>
      <button onClick={handleClickState}> state 올려</button>
      <button onClick={handleClickRef}> Ref 올려</button>
    </div>
  );
}

export default App;
```
**Ref의 장점** : **자주 바꿔야 하는 값**에 State를 넣으면 재랜더링이 많이 되서 효율적이지 않음. However! ref는 그딴거 없기 때문에 **효율적인 사용 O**

# 원문2 (Ref와 var의 차이점) 
```javascript
import { useState, useRef } from 'react';


function App() {
  const [renderer, setRenderer] = useState(0); // State는 동작 때마다 랜더링을 하니 랜더링 버튼으론 딱임.
  const countRef = useRef(0);
  let countVar = 0;

  const dorender = () => {
    setRenderer(renderer + 1);
    console.log('랜더링 됐다');
  };
  //^^ 랜더링

  const upRef = ()=>{
    countRef.current = countRef.current +1;
    console.log('ref : ', countRef.current);
  };
//^^ ref 값 올리기 + 얼마인지 출력

  const upVar = ()=>{
    countVar = countVar +1;
    console.log('var : ', countVar);
  };
// ^^ var값 올리기 + 얼마인지 출력

  const printresult = () => {
    console.log(`ref : ${countRef.current}, var: ${countVar}`);
  };
// Ref값 Var값 둘다 출력


  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={dorender}> 랜더링가링가링~ </button>
      <button onClick={upRef}> Ref올려</button>
      <button onClick={upVar}> var 올려</button>
      <button onClick={printresult}> ref,var 값 출력</button>
    </div>
  );
};

export default App;
```

> Ref와 Var을 누르고 랜더링버튼을 눌러보면 var의 값은 0일 것이다.
>
> 왜냐하면 랜더링 = 컴퍼런트 내 함수들이 재 호출됨. => 함수가 초기화 됨 (0). 하지만 ref의 값은 ***컴퍼런트의 전 생애주기를 통해 저장*** 됨. 고로 초기화, 사라지지 않고 그대로 남게됨.
>
# 원문3 (ref가 굉장히 유용한 상황)
``` javascript
import { useState, useRef, useEffect } from 'react';


function App() {
 const [count, setCount] = useState(1);
//  만약 재랜더링 된 수를 로그에 출력하고 싶다면 어떻게 해야할까?
 const [renderCount, setrenderCount] = useState(1);
// 그냥 이렇게 useState에 초기 값 넣고, 밑에처럼 useEffect 써서 카운트 하면 되는거 아니야?
   useEffect(() => {
     console.log("렌더링")
     setrenderCount(renderCount + 1);
   })
// 하지만 이렇게 하면 **개같이 망함**. 이유를 알려면 각각의 특성을 알고 있어야 하는데,
// 올려 버튼을 누름 (useState 동작) -> count stat가 업데이트가 되기 때문에(useState라 1동작 1랜더링) useEffect(얜 랜더링 되자마자 동작)가 실행 될것임.
// 하지만 useEffct안에 setrenderCount(renderCount + 1); 라는 count state를 업데이트 시키는 코드가 있다. (=> 재랜더링)
// -> count state가 업데이트가 되기 때문에 useEffect가 실행 될것임.
// 이 과정의 무한 반복이 일어나 개같이 망함.

// 여기서 Ref가 유용함.
const renderCount = useRef (1);

useEffect(() => {
  renderCount.current = renderCount.current + 1;
  console.log ('랜더링 수:', renderCount.current);
});
// ref는 재랜더링을 발생 시키지 않음 => 무한루프 X
// 변화는 감지해야 하지만 랜더링은 일으키지 않아야 할 때 유용함.

  return (
    <div>
      <p> Count : {count}</p>
      <button onClick={ () => setCount(count +1)}> 올려어엇!!!!</button>
    </div>
  );
};

export default App;

```
> **ref는 재랜더링을 발생 시키지 않음 => 무한루프 X** <br>
> **변화는 감지**해야 하지만 **랜더링은 일으키지 않아**야 할 때 유용함. <br>
> (위 내용들은 useRef로 변수들을 효과적으로 관리하기 위함임.)

# 원문3 (Dom 요소에 접근)
우!리 서언수 들이 활약하기 위해선 도옴~구!장!을 만↘️들↘️어↘️야↘️해↘️요!

```javascript
import react, { useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef();

  useEffect(()=> {
    // console.log(inputRef);
    inputRef.current.focus();
    // focus를 넣음으로서 처음 랜더링 할 때 자동으로 커서가 올라가게 함함
  },[]);

  const login = () => {
    alert(`환영합니다! ${inputRef.current.value}`);
    inputRef.current.focus();
    // 밑에 로그인 버튼을 누르면 alert로 알림이 뜨며 그 뒤에 유저의 이름이 뜬다.
    // 확인을 누르면 다시 포커스
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="userName"></input>
      <button onClick={login}> 로그인 </button>
    </div>
  );
};

export default App;
```

# 원문4 (UseContext)

