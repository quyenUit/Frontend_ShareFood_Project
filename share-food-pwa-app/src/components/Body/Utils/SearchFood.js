import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Toggle from "./Toggle";
import "../../../styles/SearchFood.css";

const SearchFood = () => {
  return (
    <Navbar expand="lg" className="Nav-search-bg">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <div>
            <Toggle />
            <h4 className="food-round-here">Thức ăn quanh bạn</h4>
          </div>

          <Form className="search-box">
            <Form.Control
              type="search"
              placeholder="Tìm món ăn"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="btn-search">
              Tìm kiếm
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SearchFood;
