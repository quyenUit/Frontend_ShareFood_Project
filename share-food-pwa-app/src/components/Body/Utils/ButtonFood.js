import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../../../styles/ButtonFood.css";

const ButtonFood = () => {
  let navigate = useNavigate();
  const handlePagePost = () => {
    let path = `/post`;
    navigate(path);
  };
  return (
    <Navbar expand="lg" className="Nav-button-bg" style={{ height: "5%" }}>
      <Container fluid>
        <Navbar.Collapse id="navbarScroll-button">
          <div>
            <Button
              variant="outline-primary"
              className="button-food-p"
              onClick={handlePagePost}
            >
              Đăng tin
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default ButtonFood;
