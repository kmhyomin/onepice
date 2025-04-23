```JSX
function Movie({ coverImg, title, summary, genres }) {
  console.log("jjy genres", genres)
  return (
    <div>
      <img src={coverImg} alt="title" />
      <Link to = "/movie"> {title} </Link>
      {/*^^현실*/}
      {/* 원본 : <h2>{title}</h2> */}
      {/* 이상 : <a href = "/movie"></a> */}
      
      {/*우리의 목적 = title을 누르면 그 영화 라우터로 이동 */}
      {/*그렇다면 h2에 a태그를 입히면 되지 않는가? */}
      {/*이것도 방법. 허나 페이지 전체가 재랜더링 => 비효율적*/}
      {/*고로.. App.js*/}
      
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li> 
        ))}
      </ul>
    </div>
  );
}
```
## =============================================
```JSX
import { BrowserRouter as Router, Switch,  Route} from 
"react-router-dom";
{/*react-router-dom의 Link component를 사용하면 재랜더링 없이도 유저를 다른 페이지로 이동시켜줌.*/}
```
