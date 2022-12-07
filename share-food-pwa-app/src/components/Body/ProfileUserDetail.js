import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ImCamera } from "react-icons/im";
import imgNotFound from "../../images/orca.gif";
import "../../styles/ProfileUserDetail.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./userSlice";

const ProfileUserDetail = () => {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const navigate = useNavigate();
  const HandleSaveInfoUser = async (event) => {
    event.preventDefault();
    if (password === password1) {
      await axios
        .patch(`http://localhost:3001/users/update/${userInfo._id}`, {
          username: username,
          email: email,
          address: address,
          phone: phone,
          password: password,
        })
        .then((response) => {
          if (response) {
            dispatch(logout());
            navigate("/login");
          } else {
            navigate("/profile/edit");
          }
        })
        .catch((e) => {});
    }
  };
  console.log(HandleSaveInfoUser());

  const HandleCancelInfoUser = async (event) => {
    event.preventDefault();
    navigate("/profile");
  };
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
                        Thông tin cá nhân
                      </h1>
                    </Row>
                    <div className="change-avartar">
                      <Col md={3} sm={12} className="col-bg2">
                        <div className="avatar">
                          <img src={imgNotFound} alt="avatar" />
                          <div className="button-change-picture">
                            <ImCamera className="ImCamera">
                              <input
                                type="file"
                                multiple
                                accept="image/jpeg, image/png"
                              />
                            </ImCamera>
                          </div>
                        </div>
                      </Col>
                      <Col md={9} sm={12} className="info-user-detail">
                        <Col xs={12} className="__edit-form">
                          <form>
                            <div className="form-group">
                              <label for="usr">Tên đăng nhập:</label>
                              <input
                                type="text"
                                className="form-control"
                                value={userInfo.username}
                                id="username"
                                name="username"
                                onChange={(e) => {
                                  setUsername(e.target.value);
                                }}
                              />
                            </div>
                            <div className="form-group">
                              <label for="email">Email:</label>

                              <input
                                type="email"
                                className="form-control"
                                // value={userInfo.email}
                                id="email"
                                name="email"
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>

                            <div className="form-group ">
                              <label for="address">Địa chỉ:</label>
                              <input
                                type="text"
                                className="form-control"
                                // value={userInfo.address}
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
                                // value={userInfo.phone}
                                id="sdt"
                                name="phone"
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                              />
                            </div>
                            <div classNam="form-group ">
                              <label for="pwd">Mật khẩu:</label>
                              <input
                                type="password"
                                className="form-control"
                                id="pwd"
                                name="password"
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                            </div>
                            <div classNam="form-group ">
                              <label for="pwd"> Xác nhận mật khẩu:</label>
                              <input
                                type="password"
                                className="form-control"
                                id="pwd1"
                                name="password"
                                onChange={(e) => {
                                  setPassword1(e.target.value);
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
                              <Col>
                                <button
                                  type="submit"
                                  className="btn btn-danger"
                                  onClick={HandleCancelInfoUser}
                                >
                                  Hủy
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

export default ProfileUserDetail;
