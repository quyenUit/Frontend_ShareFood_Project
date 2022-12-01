import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "../../styles/MyFollowing.css";
const MyFollowing = () => {
  const [showfollow, setShowFollow] = useState(false);

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="background_">
              <div className="background_title">
                <h3 className="title">Đang theo dõi</h3>
              </div>

              <div className="background_fl">
                <img
                  src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2017/03/naruto-2-696x522.jpg?fit=700%2C20000&quality=95&ssl=1"
                  alt="avatar"
                  className="avatar_fl"
                  height="50"
                  width="50"
                />
                <div className="background_content mt-4">
                  <div className="user_fl">Từ thiện Thủ Đức</div>
                  <div className="backgroun_btn_fl">
                    {showfollow ? (
                      <button className="btn">Following</button>
                    ) : (
                      <button className="btn">Unfollowing</button>
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

export default MyFollowing;
