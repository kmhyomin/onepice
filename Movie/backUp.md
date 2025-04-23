# App.js
```JSX
import {useState, useEffect} from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

{/*react-router-dom의 Link component를 사용하면 재랜더링 없이도 유저를 다른 페이지로 이동시켜줌.*/}

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
    /*설치한 react-router-dom의 버전이 6이상임에 따라 노마드 코더와 다른 코드를 작성하게 됨.*/
  );
};

export default App;

// HashRouter 뒤에 해시(#)가 붙은 다음 페이지 (/movie)가 붙는다.
// BrowserRouter 그냥 평범한 url임
```
# Movie.js
```JSX
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Movie({ id, coverImg, title, summary, genres }) {
  console.log("jjy genres", genres)
  return (
    <div>
      <img src={coverImg} alt="title" />
      <Link to = {`/movie/${id}`}> <h2>{title}</h2> </Link>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li> 
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {  
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```
# Home.js
```JSX


// 이 route는 Appcomponent의 전체를 갖게됨.

import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import '';

function Home(){
  const [loding,setLoding] = useState(true);
  const [movies,setMovies] = useState([]);
  
  const getMovies = async() => {
    const json = await(
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year`
      )
    ).json();
    // fetch => APUI호출, 서버에서 데이터를 가져오는 데 사용됨. 비동기적 작동.
    setMovies(json.data.movies);
    setLoding(false);
  }

  useEffect(() => {
    getMovies();   
  } ,[]);
  
  console.log(movies);
  

  return (
    <div>
      {loding ? <h1>loding...</h1> : <div>
        {movies.map((movie) =>  (
          <Movie 
          // 대문자는 컴포넌트라고 컴.포.넌.트으으으ㅡ으ㅡ그릉그!!!!!!!!!!!!!!!!!!!!!!!!!1
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres} />
        ))}</div>
        }
    </div>
  );
}

export default Home;
```
# Detail.js
```JSX
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const {id} = useParams();
  const getMovie = async () =>{
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  }

  useEffect(() => {
    getMovie();
  },[])
  return <h1>Detail</h1>
}

export default Detail;
```
