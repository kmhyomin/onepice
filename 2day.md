# 2025.03.19. (2일차)

>어제 팀장님께서 받은 원피스로 node.js의 nvm을 깔아봤다.
# NVM
>먼저 npm부터 알아보겠다.
>>### NPM?
>>Node Package Manager.
>>프로젝트에 필요한 패키지를 관리하는 것 **을!!** 관리해주는 것. (미친듯한 하청이라고 생각됨)
>>### NVM?
>>Node Package Manager
>>노드의 버전을 관리해준다.
# 그리고 제발제발 터미널 필요하면 win+x 눌러서 터미널 괄호열고 관리자 괄호닫고 를 누르자 제발
>어쨌든.
>>### 윈도우에서 설치하는 법
>>1. 먼저 [NVM 공식 깃허브 사이트](https://github.com/coreybutler/nvm-windows/releases)에서 아래로 스크롤 해서 Assets란 단어를 찾은 뒤, nvm-setup.exe나 ".zip 파일을 다운로드 한다.
>> 자질구레한것들은 다 yes 누르고 넘어가자.
>>2. 이제 노드의 버전을 확인하자. 비쥬얼 스튜디오 코드 들어가서 새 터미널 열고
>> "nvm list available" 이거 복붙하면 버전이 나올건데 그거 복사해두기
>>3. win+x 터미널 들어가서 "nvm install 아까 복붙한 버전" 하고 엔터 누르기.
>>4. 마지막으로 " nvm use 아까 복붙한 버전" 하면 버전 변경까지 되면서..
>
> 설치 끝!
>
> 이해 안되면 밑에 두 사이트 들어가서 참고하기. (안되면 채찍피티)
>- [뭔가야매같음](https://dulidungsil.tistory.com/entry/Windows-NVM-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0install)
>- [정석같음](https://aspring.tistory.com/entry/Window-%EC%9C%88%EB%8F%84%EC%9A%B0%EC%97%90%EC%84%9C-nvm-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9)

# React 문법
> ## 2강에서 배운것
> >- class가 아니라 **className**으로 적어야함
> >- 변수를 선언 할 땐 **function App()** 밑에<br>
>>**let 변수명 = '내용물';**<br>
>>순서로 해야하고 변수를 쓰고 싶을 땐
  { 변수명 }
>> 이렇게 집어넣으면 된다.
> >- 굳이 css를 가지 않아도 css를 넣을 수 있다.<br>
>> 넣고싶은 곳에 한칸 띄어쓰기를 한다음<br>
  **style = {{color : 'red'}}**<br>
>>이런 식으로 넣어주면 된다.
>## 3강에서 배운것
>>- 모든 코드는 return() 안에 넣어야한다.
>>- return() 안에는 [병렬로 태그 2개 이상 금지.](https://youtu.be/fE4t2Ovgp-0?si=ewTw48JL7bj6qdeD&t=65)
>>### state
>>>- 자료를 잠깐 저장할 땐 state를 써도 됨.
>>>- state는 왜 써야하는가? -> 내용물에 갑작스러운 변경(사용자가 내용물을 바꿨다거나, 업데이트 됐거나)이 있을 때 일반 변수와는 달리 **자동 재랜더링**이 됨. => 유용함.
>>>- 남발하지 말고 적재적소에 쓰자.
>>>
>>>### 사용법
>>>>- useState를 쓰고 위에 **import { useState } from 'react';** <-이게 생겼는지 확인하기
>>>>- useState 뒤에 () 쓰고 내용물 입력 -> useState('로랜드 고릴라');
>>>>- 쓰고 싶을 땐 앞에 let(or var 등등..)을 쓰고 [] 안에 이름 입력 -> let [작,명] = useState('로랜드 고릴라');
>>>>- 출력시엔 변수 호출 하는 것 처럼 {} 안에 입력. (a. 즉, 맨 앞의 변수를 호출하면 내용물이 출력됨. Destructuring문법(e.g.,num[0]) 을 쓰면 array식으로 썼을 때 n번째의 값이 나옴.)
