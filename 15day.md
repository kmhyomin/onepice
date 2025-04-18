# 2025.01.18. (15일차)

### 리스트
```JSX
import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value); 
  const onSubmit = (event) => {
    console.log(toDo);
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);
  
  
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your To Do..."
        /> {/*input*/}
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
      {/*map() => array 안에 있는 모든 Item을 map 안에 입력 된 것으로 바꿔줌*/}
      {/*예를 들어 const food = [,1,2,3,4,5] 를 food.map(() => ":)")하면 food = [":)",":)",":)",":)",":)"] 가 되는 것*/}
    </div>
  );
}

export default App;
```
### 암호화폐..?
```JSX
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  
  

  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[])
  
  
  return (
    <div>
      <h1> The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <label>현재 소지중인 자산의 액수 (단위 : $) : </label>
      <input type="text" placeholder=""></input>
      <label> <br />바꾸고 싶은 코인: </label>
      {loading ? <strong>Loading...</strong> : 
        <select>
          {coins.map((coin) => (
              <option> {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
          ))
          }
        </select>
      }
      
    </div>
  );
}

export default App;

```


### React에서는 사용자가 입력한 데이터를 다루려면 useState()로 상태를 만들고, onChange 이벤트로 값을 업데이트해줘야 해.

```JSX
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [amount, setAmount] =useState("");
  // ^^ 입력한 금액을 저장할 함수 만들기
  const onChange= (event) => setAmount(event.target.value);
  // ^^ input에 onCange를 넣어둠 => 바뀔 때 마다. 뒤에 useState인 onChange를 넣어줌 => 바뀔 때 마다 onChange를 실행해라 -> setAmount에 (event.target.value) = coin.id 를 넣어 amount를 변경해라.
  //여기서 onCange에 []를 안 넣은 이유 => 계속 담아두는게 아니라 한번 쓰고 버릴 것이기 때문.
  const [selectCoin, setselectCoin] = useState();
      // selectCoin => 코인id -> 코인 이름 

  const coinCalculator = () => {
    if(!selectCoin || amount === "") return null
      // 만약 selectCoin이 아무것도 써있지 않거나, 값이 ""(비었다.) 일때 아무것도 출력하지 마라.
      //return은 위에서 먼저 실행되면 그 아래 코드는 실행되지 않음.
      const price = selectCoin.quotes.USD.price;
      const totalPrice = parseFloat(amount) / price;
      // amount = input에 입력한 값
      return totalPrice;
  };


  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[])
  
  return (
    <div>
      <h1> The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <label>현재 소지중인 자산의 액수 (단위 : 원) : </label>
      <input 
      type="number" 
      placeholder="단위는 $ 입니다."
      value={amount}
      onChange={onChange}
      ></input>
      
      <label> <br />바꾸고 싶은 코인: </label>
      {loading ? <strong>Loading...</strong> : 
        <select onChange={(event) => {
          const selected = coins.find((coin) => coin.id === event.target.value);
          console.log(event.target.value);
          setselectCoin(selected);
        }}>
          {coins.map((coin) => (
            // 여기서 value는 option을 눌렀을 때 실제로 반환되는 값을 말함.
            // 나중에 사용자가 항목을 선택 했을 때 위에서 쓴 event.target.value가 coin.id로 반환됨
            // 만역 value를 넣지 않으면 {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD 통 째로 출력 됨
            // 그래서 보이는 것만 저걸로 넣어두고 실제 반환되는 값은 보이는 거의 값의 id. 즉, coin.id로 반환됨.
              <option value={coin.id} key={coin.id}> {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
          ))
          }
        </select>
      }
      <h2>
          {/*  만약 amount = "abc"와 같은 값이라면, parseFloat(amount)는 NaN (Not a Number)을 반환함. => NaN은 연산자에선 false로 취급 == 나오지 않음!!*/}
          💰 너의 돈 {amount === "" ? "0" : (parseFloat(amount) || 0).toLocaleString()}원으로 <br />
          🪙 {selectCoin ? selectCoin.name : "선택된 코인 없음"} 의 코인을 <br />
          📊 약 {coinCalculator()?.toFixed(6)}(USD) 달러 보유 할 수 있어.
      </h2>
      
    </div>
  );
}

export default App;

```
### 앱 안에서 페이지를 전환 하는 법
```JSX
```