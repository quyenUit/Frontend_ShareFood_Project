import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {
  FiMoreHorizontal,
  FiCalendar,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import "../../styles/ProfileUser.css";
import imgNotFound from "../../images/orca.gif";
import { useSelector, useDispatch } from "react-redux";

const ProfileUser = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div>
      <section className="profile-user-section-1">
        <Container>
          <Row>
            <Col xs={12} md={6} className="BasicInfo">
              <div className="AvatarWrapper">
                <div className="MuiAvatar-circular">
                  <Avatar src="/broken-image.jpg" className="MuiAvatar-img" />
                </div>
              </div>

              <div className="InfoWrapper">
                <span className="username">
                  {" "}
                  <b>{userInfo.username}</b>{" "}
                </span>
                <div className="FollowRow">
                  <div className="Follower">
                    <a href="#!">
                      <b> {userInfo.follower} </b>
                      Được theo dõi
                    </a>
                  </div>
                  <div>
                    <a href="#!">
                      <b> {userInfo.following} </b>
                      Đang theo dõi
                    </a>
                  </div>
                </div>

                <div className="UltiRow">
                  <Link to="/profile/edit">
                    <button className="EditProfile">
                      {" "}
                      Chỉnh sửa trang cá nhân
                    </button>
                  </Link>
                  <button className="circleButton">
                    <span className="">
                      <FiMoreHorizontal>
                        <path></path>
                      </FiMoreHorizontal>
                    </span>
                  </button>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className="ExtraInfo">
              <div className="itemRow">
                <FiCalendar className="icon-profile" />
                <b>Ngày tham gia:</b>
                <span> {userInfo.createdate}</span>
              </div>
              <div className="itemRow">
                <FiMapPin className="icon-profile" />
                <b>Địa chỉ:</b>
                <span> {userInfo.address}</span>
              </div>
              <div className="itemRow">
                <FiPhone className="icon-profile" />
                <b>Số điện thoại:</b>
                <span> {userInfo.phone}</span>
              </div>
              <div className="itemRow">
                <FiMail className="icon-profile" />
                <b>Email:</b>
                <span> {userInfo.email}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="profile-user-section-2">
        <Container>
          <Row>
            <div className="PaperContainer">
              <h4 className="TitleHeading">
                Lịch sử tin đăng
                <span> - 0 tin </span>
              </h4>
              <div className="row list">
                <ul style={{ width: "100%" }} className="ul-list">
                  <div className="notfound">
                    <img
                      src={imgNotFound}
                      alt="img-notfound"
                      height="100"
                      width="100"
                    />
                    <div className="alert alert-warning">
                      Bạn chưa có tin đăng nào, thử đăng tin ngay.
                    </div>
                    <div>
                      <Link to="/post" className="post-food-css">
                        Đăng tin
                        <span className="MuiTouchRipple-root-css"></span>
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="profile-user-section-3">
        <Container>
          <Row>
            <div className="PaperContainer">
              <h4 className="TitleHeading">
                Lịch sử nhận thực phẩm
                <span> - Nhận 0 </span>
              </h4>
              <div className="row list">
                <ul style={{ width: "100%" }} className="ul-list">
                  <div className="notfound">
                    <img
                      src={imgNotFound}
                      alt="img-notfound"
                      height="100"
                      width="100"
                    />
                    <div className="alert alert-warning">
                      Chưa có thực thẩm nào được nhận.
                    </div>
                    <div className="alert alert-warning">
                      Nếu bạn khó khăn hãy lấy một phần. Nếu bạn ổn xin nhường
                      người khác.
                    </div>
                    <div>
                      <Link to="/" className="post-food-css">
                        Nhận thực phẩm
                        <span className="MuiTouchRipple-root-css"></span>
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProfileUser;
