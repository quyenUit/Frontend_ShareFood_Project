import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useParams, useNavigate} from "react-router-dom";
import "../../styles/FoodDetails.css";
import { getPostId, updateOrderPost } from "../../features/posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReturnValueZero } from "./ReturnValueZero";
import { useState } from "react";
import { useNotification } from "use-toast-notification";

const FoodDetails = () => {
  const {postId} = useParams();
  const post = useSelector((state) => getPostId(state, Number(postId)));
  const date = new Date(post.timeStart);
  const dateEnd = new Date(post.timeEnd);
  const timeStart =  (date.getHours() + ":" + ReturnValueZero(date.getMinutes())+ "  -  " + dateEnd.getHours() + ":" + ReturnValueZero(dateEnd.getMinutes())).toString();
  const [amount, setAmount] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notification = useNotification();
  const TakeOrder = () => {
    try{
      dispatch(updateOrderPost({id: post._id, amount: post.amount - Number(amount)})).unwrap()
      notification.show({
        message: 'Bạn đã yêu cầu thành công', 
        title: 'Thành công',
        variant: 'success'
      })
      navigate("/")
    }catch(err){
      console.error('Failed to save the post', err)
    }
  }
  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={8}>
              <div id="curve-detail" className="card col-lg-3">
                <img src={post.file} alt="#"></img>
                <div className="footer">
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
                    <div className="name">{post.name}</div>
                    <div className="job">{post.location}</div>
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
            <h4 className="d-flex">
              <b>Loại thực thẩm:&emsp;</b>
              {post.type}
            </h4>
            <h4 className="d-flex">
              <b>Thời gian cho:&emsp;</b>
              {timeStart}
            </h4>
            <h4 className="d-flex">
              <b>Địa chỉ:&emsp;</b>
              {post.location}
            </h4>
            <h4 className="d-flex">
              <b>Số lượng cho:&emsp;</b>{post.amount}
            </h4>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  <i>Thêm ghi chú cho quán (Không bắt buộc)</i>
                </Form.Label>

                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <Col className="order-number-food d-flex justify-content-center" lg="12">
              <h3>Số lượng muốn nhận: </h3>
              <input type="number" className="input-number" onChange={(e) => setAmount(e.target.value)}/>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="d-flex justify-content-center">
              <Button onClick={TakeOrder}>
                Gửi yêu cầu
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FoodDetails;
