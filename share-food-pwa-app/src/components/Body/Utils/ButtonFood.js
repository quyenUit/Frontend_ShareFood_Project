import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const ButtonFood = () => {
  return (
    <Navbar expand="lg" className="Nav-search-bg">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <div>
            <Button
              variant="outline-primary"
              style={{ display: "flex", margin: "40px" }}
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
