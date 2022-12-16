import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { apiUrl } from "../../../components/constants/apiURL";

const AddEdit = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const HandleSaveInfoUser = async (event) => {
    event.preventDefault();
    await axios
      //`http://localhost:3001/users/${userInfo._id}`
      .put(`${apiUrl}/users/${userInfo._id}`, {
        username: username,
        address: address,
        phone: phone,
      })
      .then((response) => {
        if (response) {
          navigate("/admin");
        } else {
          navigate(`/update/${userInfo._id}`);
        }
      })
      .catch((e) => {});
  };
  console.log(HandleSaveInfoUser());

  return (
    <div>
      <Container>
        <Row style={{ marginleft: "-10px", marginright: "-10px" }}>
          <Col md={12} className="col-bg1">
            <Row className="pageMargin justify-content-md-center">
              <Col className="boxContentLeft" md={9}>
                <Row className="white-box">
                  <Col xs={12}>
                    <Row>
                      <h1 className="page-title" id="pageTitle">
                        Thông tin người dùng
                      </h1>
                    </Row>
                    <div className="change-avartar">
                      <Col md={9} sm={12} className="info-user-detail">
                        <Col xs={12} className="__edit-form">
                          <form>
                            <div className="form-group">
                              <label for="usr">Tên đăng nhập:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                onChange={(e) => {
                                  setUsername(e.target.value);
                                }}
                              />
                            </div>

                            <div className="form-group ">
                              <label for="address">Địa chỉ:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                onChange={(e) => {
                                  setAddress(e.target.value);
                                }}
                              />
                            </div>
                            <div className="form-group ">
                              <label for="phone">Số điện thoại:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="sdt"
                                name="phone"
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                              />
                            </div>
                            <Row>
                              <Col>
                                <button
                                  type="submit"
                                  className="btn btn-info"
                                  onClick={HandleSaveInfoUser}
                                >
                                  Lưu thay đổi
                                </button>
                              </Col>
                            </Row>
                          </form>
                        </Col>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddEdit;
