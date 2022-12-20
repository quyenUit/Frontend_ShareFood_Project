// import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
// import Navbar from "react-bootstrap/Navbar";
// import Toggle from "./Toggle";
import "../../../styles/SearchFood.css";
// import { useSelector } from "react-redux";
// import CardFoodList from "../CardFoodList";

import Container from "react-bootstrap/esm/Container";
import { Row, Col, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const SearchFood = () => {
  const [searchContent, setSearchContent] = useState("");
  const { post } = useSelector((state) => state.post);
  return (
    <section className="section-search">
      <Container className="search-home-page-container">
        <Row>
          <Col lg="12" className="search-home-page">
            <Form.Control
              type="search"
              placeholder="Tìm món ăn"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchContent(e.target.value)}
            ></Form.Control>
            <Button style={{ width: "25%" }}>
              <i className="fa fa-search" aria-hidden="true">
                Tìm kiếm
              </i>
            </Button>
          </Col>
          <Col lg="12" className=" search-home-page-key">
            {/* <p>Món ăn được tìm nhiều nhất: </p>
          <Link> Bánh mì </Link>
          <Link> Cơm gà </Link>
          <Link> Phở </Link> */}
          </Col>
          <Col className="search-home-page-result">
            {post
              .filter((item) => {
                if (searchContent === "") {
                  return null;
                } else if (
                  item.name.toLowerCase().includes(searchContent.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((post, index) => {
                if (index < 7) {
                  return (
                    <Link
                      to={`/post/${post._id}`}
                      className="box-search-home-key-1"
                    >
                      <div className="box-search-home-key" key={index}>
                        <p>{post.name}</p>
                      </div>
                    </Link>
                  );
                }
              })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchFood;
