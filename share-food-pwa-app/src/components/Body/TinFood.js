import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../styles/TinFood.css";

const TinFood = () => {
  return (
    <>
      <section className="section-bg">
        <Container>
          <Row>
            <Col>
              <h2 className="TinFood-title">Tin Food của tôi</h2>
            </Col>

            <Row>
              <Col xs={6}>
                <Button variant="primary">{"Yêu cầu cho Food"}</Button>
                <hr className="hr-line" />
              </Col>
              <Col xs={6}>
                <Button variant="primary">{"Yêu cầu nhận Food"}</Button>
                <hr className="hr-line" />
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TinFood;
