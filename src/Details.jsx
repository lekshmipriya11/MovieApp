import React from "react";
import { movieContext } from "./App";
import { useContext } from "react";
import { imageUrl } from "./Url";
import { Rating } from "react-simple-star-rating";

const Details = () => {
  const { movie, selectId, show, setShow } = useContext(movieContext);
  console.log(movie);
  console.log(selectId);
  const selectMovie = movie.filter((m) => m.id === selectId);
  console.log(selectMovie[0]);
  setShow(false);
  return (
    <div style={{ backgroundColor: "lightgray", paddingBottom: "20px" }}>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Movie Details</h1>
      <div
        style={{
          paddingTop: "10px",
          paddingBottom: "20px",
          margin: "25px",
          backgroundColor: "lightpink",
        }}
      >
        <img
          src={imageUrl + selectMovie[0]?.poster_path}
          style={{
            height: "500px",
            width: "75%",
            margin: "10px",
            border: "10px",
            paddingLeft: "100px",
          }}
        />
        <div style={{ margin: "20px" }}>
          <h2 style={{ textAlign: "center" }}>{selectMovie[0]?.title}</h2>
          <h6>Language: {selectMovie[0]?.original_language}</h6>
          <Rating
            name="customized_5"
            defaultValue={selectMovie.vote_average}
            map={10}
          />
          <h6>Release Date: {selectMovie[0]?.release_date}</h6>
          <h6>Overview: {selectMovie[0]?.overview}</h6> 
        </div>
      </div>
    </div>
  );
};

export default Details;
