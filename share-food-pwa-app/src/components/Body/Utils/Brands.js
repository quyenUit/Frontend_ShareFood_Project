import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Brand1 from "../../../images/cam-da-chien-3.jpg";
import Brand2 from "../../../images/quan_an_tu_thien_1.jpg";
import Brand3 from "../../../images/quan_an_tu_thien.jpg";
import Brand4 from "../../../images/quan-com.jpg";

const Brands = () => {
  return (
    <section className="py-5" style={{ backgroundcolor: "" }}>
      <Container className=" bg-light my-4">
        <Row className="text-center py-3">
          <Col lg={6} className="m-auto">
            <p
              style={{
                fontSize: "30px",
                fontFamily: "-webkit-body",
                color: "#865439",
              }}
            >
              Mạnh thường quân
            </p>
          </Col>
          <Col lg={9} className="m-auto tempaltemo-carousel">
            <Row className="d-flex flex-row">
              {/*Controls*/}
              <Col className="col-1 align-self-center">
                <a
                  className="h1"
                  href="#templatemo-slide-brand"
                  role="button"
                  data-bs-slide="prev"
                >
                  <FaArrowLeft size={"1.2rem"} />
                </a>
              </Col>
              {/*End Controls*/}

              {/*Carousel Wrapper*/}
              <div className="col">
                <div
                  className="carousel slide carousel-multi-item pt-2 pt-md-0"
                  id="templatemo-slide-brand"
                  data-bs-ride="carousel"
                >
                  {/*Slides*/}
                  <div
                    className="carousel-inner product-links-wap"
                    role="listbox"
                  >
                    {/*First slide*/}
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <a href="#!">
                            <img
                              className="img-fluid brand-img"
                              src={Brand1}
                              alt="Brand Logo"
                              style={{ width: "150%", height: "150px" }}
                            />
                          </a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="#!">
                            <img
                              className="img-fluid brand-img"
                              src={Brand4}
                              alt="Brand Logo"
                              style={{ width: "150%", height: "150px" }}
                            />
                          </a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="#!">
                            <img
                              className="img-fluid brand-img"
                              src={Brand2}
                              alt="Brand Logo"
                              style={{ width: "150%", height: "150px" }}
                            />
                          </a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="#!">
                            <img
                              className="img-fluid brand-img"
                              src={Brand3}
                              alt="Brand Logo"
                              style={{ width: "150%", height: "150px" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*End First slide*/}
                    {/*Second slide*/}
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <a href="#!">
                            <img
                              className="img-fluid brand-img"
                              src={Brand4}
                              alt="Brand Logo"
                              style={{ width: "150%", height: "150px" }}
                            />
                          </a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="#!">
                            <img
                              className="img-fluid brand-img"
                              src={Brand1}
                              alt="Brand Logo"
                              style={{ width: "150%", height: "150px" }}
                            />
                          </a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="#!">
                            <img
                              className="img-fluid brand-img"
                              src={Brand2}
                              alt="Brand Logo"
                              style={{ width: "150%", height: "150px" }}
                            />
                          </a>
                        </div>
                        <div className="col-3 p-md-5">
                          <a href="#!">
                            <img
                              className="img-fluid brand-img"
                              src={Brand3}
                              alt="Brand Logo"
                              style={{ width: "150%", height: "150px" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*End Second slide*/}
                  </div>
                  {/*End Slides*/}
                </div>
              </div>
              {/*End Carousel Wrapper*/}
              {/*Controls*/}
              <Col className="col-1 align-self-center">
                <a
                  className="h1"
                  href="#templatemo-slide-brand"
                  role="button"
                  data-bs-slide="prev"
                >
                  <FaArrowRight size={"1.2rem"} />
                </a>
              </Col>
              {/*End Controls*/}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
