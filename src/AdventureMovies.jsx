import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Adventure_movies, imageUrl} from "./Url";
import axios from "axios";
import "./Style.css";

const AdventureMovies = () => {
  const [popfilm, setFilm] = useState([]);
    useEffect(() => {
    axios.get(Adventure_movies).then((res) => setFilm(res.data.results));
  }, []);
  console.log(popfilm);

  return (
    <div className="maniDiv">
      <div> <h1> Adventure Movies</h1></div>
     
      {popfilm.map((item) => {
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
  );
};

export default AdventureMovies;
