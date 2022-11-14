import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../../../styles/ButtonFood.css";
const ButtonFood = () => {
  return (
    <Navbar expand="lg" className="Nav-button-bg" style={{ height: "5%" }}>
      <Container fluid>
        <Navbar.Collapse id="navbarScroll-button">
          <div>
            <Button variant="outline-primary" className="button-food-p">
              Đăng tin
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default ButtonFood;
