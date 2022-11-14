import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import "./Footers.css";
import {
  FaTwitter,
  FaFacebookF,
  FaSkype,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import logodown from "../../images/logo-main.png";

export default function Footers() {
  return (
    <footer id="footer" className="mt-auto">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6} xs={12} className="footer-contact">
              <h3>
                <Image width={100} src={logodown} alt="" />
              </h3>
              <p>
                Đây là dự án phi lợi nhuận, được thực hiện bởi một nhóm sinh
                viên của Trường đại học Công nghệ Thông tin.
                <br />
                <strong>Phone:</strong> 06 76 56 48 93
                <br />
                <strong>Email:</strong> sharefood@me.com
                <br />
              </p>
            </Col>
            <Col lg={2} md={6} xs={6} className="footer-links">
              <h4>Userfull Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#!">Trang chu</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#!">About</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#!">Service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#!">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#!">Privacy policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} xs={6} className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#!">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#!">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#!">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#!">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#!">Graphic Design</a>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={6} className="footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Building dashboards in Tailwind CSS has never been so easy!{" "}
              </p>
              <form
                action=""
                onSubmit={() => toast.success("thanks for yr Subscrition")}
              >
                <input
                  type="email"
                  required
                  placeholder="email@domain.com"
                  name="email"
                />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="container d-md-flex py-4"
        style={{ backgroundcolor: "green" }}
      >
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Share Food</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#!">Share Food</a>
          </div>
        </div>
        <div className="social-links text-center text-md-end pt-3 pt-md-0">
          <a
            href="https://www.facebook.com/nguyenhuuquyen2001"
            className="twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/nguyenhuuquyen2001"
            className="facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.facebook.com/nguyenhuuquyen2001"
            className="instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/nguyenhuuquyen2001"
            className="google-plus"
          >
            <FaGooglePlusG />
          </a>
          <a
            href="https://www.facebook.com/nguyenhuuquyen2001"
            className="linkedin"
          >
            <FaSkype />
          </a>
        </div>
      </div>
    </footer>
  );
}
