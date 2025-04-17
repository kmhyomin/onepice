# 2024.04.16. (13일차)

크아아악!!

``` Jsx
function KilleToMaile(){
      const [amount,setAmount] = React.useState(0);
      const [inverted,setInverted]= React.useState(false);

      const reset = () => setAmount(0);
      const onChange = (event) => setAmount(event.target.value);
      const onInvert = () =>{
        reset();
        setInverted((current) => !current);
      };

      return (
        <div>
          <div>
            <label> 킬로미터 => </label>
            <input 
            id = "Killomiter"
            value = {inverted ? (amount * 0.621371).toFixed(6) : amount}
            type="number" 
            placeholder = "write a Killomiter"
            onChange = {onChange}
            disabled = {inverted}
            />
          </div>
          <div>
            <label> 마일 => </label>
            <input 
            id = "maile"
            value ={inverted ? amount : (amount * 1.60934).toFixed(6)}
            type="number" 
            placeholder = "write a Mile"
            onChange = {onChange}
            disabled = {!inverted}
            />
          </div>
          
          <button onClick={reset}> 리셋하기</button>
          <button onClick={onInvert} > 뒤집기 </button>
        </div>
        // first div
      );
    };
```
``` Jsx
function App(){
      const [index,setIndex] = React.useState("0");
      const onselect = (event) => {
        setIndex(event.target.value);
        
      }
      return (
        <div>
            <h1>멋진 변환기</h1>
            
            <select value = {index} onChange = {onselect}>
              <option value="0"> Minutes & Hour</option>
              <option value = "1"> Km & Miles</option>
            </select>
            <hr />
            
            {index === "0" ? <MinutesToHours /> : null}
            {index == "1" ? <KilleToMaile /> : null}
            {/*index의 변화를 리스닝 함*/}
            {/*{} == 작은 if문*/}
            
        </div>
      );
    };
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
    function Btn( { text , onClick} ){
      //직접, 손수 달아줘야 함.
      console.log(text);
      
      return <button 
        onClick = {onClick}
        style = {{
        backgroundColor : "red",
        color : "white",
        padding : "10px 20px",
        border: 0,
        borderRadius : "10px",
      }}> {text} 
      </button>;
    };
    
    const MemorizedBtn = React.memo(Btn);
    function App(){
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");

      return <div>
        <MemorizedBtn text={value} onClick = {changeValue} />
```
onClick을 인위적으로 생성한 컴포넌트에 넣으면 그건 eventLesner가 아님, Btn으로 들어가는 prop임
<br>쓸려면 (12행). <br>그리고 쓰여진 prop들은 return에 자동으로 안 들어가짐. <br>그래서 일일이 달아줘야하는 것
```JSX
        <MemorizedBtn text="Continue"/> {/* <- 이 안에 뭘 넣든 그건 단지 prop임*/}
        {/*위의 내용이 JSX의 내부*/}
        </div>;
    };
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  </script>
</body>
</html>
```
## 심각한 에러 코드
``` Jsx
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <div id="root"></div>
  <script type="text/babel">
    function Btn( { text, fontSize } ){
      return <button 
        style = {{
        backgroundColor : "red",
        color : "white",
        padding : "10px 20px",
        border: 0,
        borderRadius : "10px",
        fontSize,
      }}> {text} 
      </button>;
    };
    function App(){
      
      return 
        <div>
          <Btn text="Save Changes" fontSize = {18}/>
          <Btn text={123} fontSize ={"dsajkl"} />
        </div>;
    };
    
    const root = document.getElementById("root");
    ReactDOM.render(<App  />, root);
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
  <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <div id="root"></div>
  <script type="text/babel">
    function Btn( { text, fontSize } ){
      return (
        <button 
          style = {{
            backgroundColor : "red",
            color : "white",
            padding : "10px 20px",
            border: 0,
            borderRadius : "10px",
            fontSize,
          }}
      >
        {text} 
      </button>
    );
  }
  Btn.propTypes = {
      text: PropTypes.string.isRequired,  
      fontSize: PropTypes.number.isRequired,
  };
    function App(){
      
      return (
        <div>
          <Btn text="Save Changes" fontSize = {18}/>
          <Btn fontSize={12} text={"test"} />
        </div>
      );
        
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<App  />, root);
  </script>
</body>
</html>
```

``` Jsx
```

``` Jsx
```
