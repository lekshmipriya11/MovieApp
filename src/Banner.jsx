import React, { useEffect, useState } from "react";
import { Adventure_movies, imageUrl } from "./Url";
import axios from "axios";

const Banner = ({}) => {
  const [popfilm, setFilm] = useState([]);

  useEffect(() => {
    axios.get(Adventure_movies).then((res) => setFilm(res.data.results));
  }, []);
  console.log(popfilm);

  const arraylength = popfilm.length;
  console.log(arraylength);

  let random_num = Math.floor(Math.random() * 20);
  console.log(random_num);

  const film = popfilm[random_num];
  console.log(film);

  const img = imageUrl + film?.poster_path;
  return (
    <div
      className="BannerImg"
      style={{ backgroundImage: `url(${img})`, height: "750px", width: "100%" }}
    >
      <div className="Content">
        <h3
          style={{ textAlign: "center", color: "white", paddingTop: "300px" }}
        >
          <i>{film?.title}</i>
        </h3>
        <h6 style={{ textAlign: "center", color: "white", paddingTop: "10px" }}>
          {" "}
          {film?.overview}
        </h6>
      </div>
    </div>
  );
};
export default Banner;
