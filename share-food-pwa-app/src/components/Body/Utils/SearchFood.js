import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Toggle from "./Toggle";
import "../../../styles/SearchFood.css";
import { useSelector } from "react-redux";
import CardFoodList from "../CardFoodList";
const SearchFood = () => {
  return (
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
  );
};

export default SearchFood;
