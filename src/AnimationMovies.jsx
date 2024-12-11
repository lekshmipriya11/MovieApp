import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Animation_movies,imageUrl } from "./Url";
import axios from "axios";
import "./Style.css";

const AnimationMovies = () => {const [letestfilm, setFilm] = useState([]);
  useEffect(() => {
    axios.get(Animation_movies).then((res) => setFilm(res.data.results));
  }, []);
  console.log(letestfilm);

  return (
    <div className="maniDiv">
      <h1> Animation Movies</h1>
      {letestfilm.map((item) => {
        return (
          <div className="innerDiv">
              <Card style={{ width: "18rem",height: "360px",float: "left", paddingLeft:"10px",paddingRight:"5px",paddingTop:"10px",backgroundColor:"lightgrey" }}>
              <Card.Img
                variant="top"
                src={imageUrl + item.poster_path}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  )
}

export default AnimationMovies;