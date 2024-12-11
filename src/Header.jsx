import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "./Images/movie-icon.jpg";
import "./Style.css";

const Header = () => {
  return (
    <div className="headClass">
      <Navbar expand="lg" className="Navbar">
        <Container class>
          <img src={Images} alt="Logo"style={{ width: "50px", height: "50px" }} />
          <Navbar.Brand style={{fontWeight:"bolder",paddingLeft:"5px"}}>
            Movie App
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" style={{ flex: "right",paddingRight:"70px"}}>
            <Nav className="ms-auto">
              <Link
                style={{
                  textDecoration: "none",
                  margin: "0,50px",
                  fontSize:"20px",
                  fontWeight:"bolder",
                }}
                to={"/adventure"}
              >
                <Nav.Link href="adventure">Adventure Movies</Nav.Link>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize:"20px",
                  margin: "0,50px",
                  fontWeight:"bolder",
                }}
                to={"/animation"}
              >
                <Nav.Link href="animation">Animation Movies</Nav.Link>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize:"20px",
                  margin: "0,50px",
                  fontWeight:"bolder",
                }}
                to={"/comedy"}
              >
                <Nav.Link href="comedy">Comedy Movies</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
