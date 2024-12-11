import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import { Adventure_movies, Animation_movies, Comedy_movies } from "./Url";
import Banner from "./Banner";
import Details from "./Details";
const movieContext=createContext();


function App() {
  const [movie, setMovie] = useState([]);
  const [selectId,setSelectId]=useState("");
  const [show,setShow]=useState(true);
  return (
    <div>
      <movieContext.Provider value={{movie,setMovie,selectId,setSelectId,show,setShow}}>

      <BrowserRouter>
        {show ===true && <Header />}
        {show ===true &&<Banner />}
        <Routes>
          <Route path="/adventure" element={<Movies movieList={Adventure_movies} title="Adventure Movies" />}/>
          <Route path="/animation"element={<Movies movieList={Animation_movies} title="Animation Movies" /> }/>
          <Route path="/comedy"element={<Movies movieList={Comedy_movies} title="Comedy Movies" />}/>
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      </movieContext.Provider>
    </div>
  );
}

export default App;
export {movieContext}
