import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ImgFood1 from "../../images/cardfood-1.jpg";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import "./FoodDetails.css";

const FoodDetails = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={8}>
              <div id="curve-detail" className="card col-lg-3">
                <img src={ImgFood1} alt="#"></img>
                <div class="footer">
                  <svg id="curve">
                    <path
                      id="p"
                      d="M0,200 Q80,100 400,200 V150 H0 V50"
                      transform="translate(0 300)"
                    />
                    <rect
                      id="dummyRect"
                      x="0"
                      y="0"
                      height="450"
                      width="400"
                      fill="transparent"
                    />
                    <animate
                      attributeName="d"
                      to="M0,50 Q80,100 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="dummyRect.mouseover"
                      end="dummyRect.mouseout"
                      dur="0.1s"
                      id="bounce1"
                    />
                    <animate
                      attributeName="d"
                      to="M0,50 Q80,0 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="bounce1.end"
                      end="dummyRect.mouseout"
                      dur="0.15s"
                      id="bounce2"
                    />
                    <animate
                      attributeName="d"
                      to="M0,50 Q80,80 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="bounce2.end"
                      end="dummyRect.mouseout"
                      dur="0.15s"
                      id="bounce3"
                    />
                    <animate
                      attributeName="d"
                      to="M0,50 Q80,45 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="bounce3.end"
                      end="dummyRect.mouseout"
                      dur="0.1s"
                      id="bounce4"
                    />
                    <animate
                      attributeName="d"
                      to="M0,50 Q80,50 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="bounce4.end"
                      end="dummyRect.mouseout"
                      dur="0.05s"
                      id="bounce5"
                    />
                    <animate
                      attributeName="d"
                      to="M0,200 Q80,100 400,200 V150 H0 V50"
                      fill="freeze"
                      begin="dummyRect.mouseout"
                      dur="0.15s"
                      id="bounceOut"
                    />
                  </svg>
                  <div className="info">
                    <div className="name">Bánh mì</div>
                    <div className="job">Quán bánh mì 24 (Cách đây 2km)</div>
                  </div>
                </div>
                <div className="card-blur"></div>
              </div>
            </Col>
          </Row>
          <div className="horizontal-line">
            <hr />
          </div>
          <Row className="food-info">
            <h4>
              {" "}
              <b>Thời gian cho:</b>{" "}
            </h4>
            <h4>
              {" "}
              <b>Địa chỉ:</b>{" "}
            </h4>
            <h4>
              {" "}
              <b>Số lượng cho:</b>{" "}
            </h4>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  {" "}
                  <i>Thêm ghi chú cho quán (Không bắt buộc)</i>{" "}
                </Form.Label>

                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={6}>
              <h3>Số lượng muốn nhận: </h3>
            </Col>
            <Col xs={6}>
              <div className="buttons-added">
                <CiCircleMinus className="Ci-Minus" />
                <input type="number" className="input-number" />
                <CiCirclePlus className="Ci-Plus" />
              </div>
            </Col>
          </Row>

          <div>
            <Button
              as="input"
              type="submit"
              value=" Gửi yêu cầu nhận thực phẩm"
              className="btn btn-warning"
            />{" "}
          </div>
        </Container>
      </section>
    </>
  );
};

export default FoodDetails;
