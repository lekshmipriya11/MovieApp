import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardText } from "react-bootstrap";
import { imageUrl } from "./Url";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import { movieContext } from "./App";

const Movies = ({ movieList, title }) => {
  const { movie, setMovie,selectId,setSelectId } = useContext(movieContext);
  console.log(movie);
  const getMovie_id = (id) => {
    setSelectId(id);
  };
  const navigate = useNavigate();
  console.log(movieList);
  const [] = useState([]);
  useEffect(() => {
    axios.get(movieList).then((res) => setMovie(res.data.results));
    setMovie(movie);
  }, [movieList]);
  console.log(movie);
  const Details = () => {
    navigate("/Details");
  };

  return (
    <div className="maniDiv">
      <h1 className="page-head" style={{ textAlign: "center" }}>
        {title}
      </h1>
      {movie.map((item) => {
        return (
          <div className="innerDiv" style={{ backgroundColor: "black" }}>
            <Card
              style={{
                width: "18rem",
                height: "450px",
                float: "left",
                paddingLeft: "10px",
                paddingRight: "5px",
                paddingTop: "10px",
                margin: "10px",
                backgroundColor: "lightgrey",
              }}
              onClick={() => getMovie_id(item.id)}
            >
              <Card.Img
                variant="top"
                src={imageUrl + item.poster_path}
                style={{ height: "220px" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {/* <b>Overview:</b>{item.overview}<br/> */}
                  <b>Language : </b>
                  {item.original_language}
                </Card.Text>
                <CardText>
                  <b>Release Date : </b>
                  {item.release_date}
                </CardText>
                <div>
                  <Button variant="primary" onClick={Details}>
                    Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default Movies;
