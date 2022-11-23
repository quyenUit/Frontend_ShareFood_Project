import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImCamera } from "react-icons/im";
import imgNotFound from "../../images/orca.gif";
import "../../styles/ProfileUserDetail.css";

const ProfileUserDetail = () => {
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
                                id="usr"
                              />
                            </div>
                            <div className="form-group">
                              <label for="usr">Email:</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                              />
                            </div>
                            <div className="form-group">
                              <label for="usr">Địa chỉ:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                              />
                            </div>
                            <div className="form-group">
                              <label for="usr">Số điện thoại:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="sdt"
                              />
                            </div>
                            <div classNam="form-group">
                              <label for="pwd">Mật khẩu:</label>
                              <input
                                type="password"
                                className="form-control"
                                id="pwd"
                              />
                            </div>
                            <div classNam="form-group">
                              <label for="pwd"> Xác nhận mật khẩu:</label>
                              <input
                                type="password"
                                className="form-control"
                                id="pwd1"
                              />
                            </div>
                            <Row>
                              <Col>
                                <button type="submit" className="btn btn-info">
                                  Lưu thay đổi
                                </button>
                              </Col>
                              <Col>
                                <button
                                  type="submit"
                                  className="btn btn-danger"
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
