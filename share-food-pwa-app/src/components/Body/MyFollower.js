import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "../../styles/MyFollowing.css";

const MyFollower = () => {
  const [showfollow, setShowFollow] = useState(true);
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="background_">
              <div className="background_title">
                <h3 className="title">Được theo dõi</h3>
              </div>

              <div className="background_fl">
                <img
                  src="https://thanhtra.com.vn/data/images/0/2022/10/21/congdinh/11-06-2021-nhieu-hoat-dong-ho-tro-cho-nguoi-dan-bi-anh-huong-dich-covid-19-931d1899-details.jpg"
                  alt="avatar"
                  className="avatar_fl"
                  height="50"
                  width="50"
                />
                <div className="background_content mt-4">
                  <div className="user_fl">Mạnh thường quân Thủ Đức</div>
                  <div className="backgroun_btn_fl">
                    {showfollow ? (
                      <button className="btn">Follow</button>
                    ) : (
                      <button className="btn">Following</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyFollower;
