import React from "react";
import "../../styles/navbarPage.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Col, Dropdown, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import brandLogo from "../../images/logo-main.png";
import { Outlet } from "react-router-dom";
import user from "../../images/user.png";
import notification from "../../images/bell.png";
import Footers from "../Footer/Footers";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/users/userSlice";
import { Link, useNavigate } from "react-router-dom";
import SearchFood from "../Body/Utils/SearchFood";
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href={ref}
    style={{ textDecoration: "none" }}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <img className="image-item item-left" src={user} alt="buying"></img>
  </a>
));

function NavbarPage() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/");
    dispatch(logout());
  }
  return (
    <>
      <div className="navbar-item-all">
        {userInfo ? (
          <Navbar expand="sm" className="navbar-container">
            <Container style={{ padding: "0" }} fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand`}
                aria-labelledby={`offcanvasNavbarLabel-expand`}
                placement="end"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="navbar justify-content-center flex-grow-1 pe-3">
                    <img
                      style={{ width: "6rem", margin: "0 2rem" }}
                      src={brandLogo}
                      alt="brand"
                    ></img>
                    <Row className="row-navbar">
                      <Col lg="2" className="nav-item-all">
                        <Link to="/" className="nav-item">
                          Trang chủ
                        </Link>
                      </Col>
                      <Col lg="2" className="nav-item-all">
                        <Link to="/myfood" className="nav-item">
                          Thực phẩm của tôi
                        </Link>
                      </Col>
                      <Col lg="2" className="nav-item-all">
                        <Link className="nav-item" to="/mygetfood">
                          Thực phẩm nhận được
                        </Link>
                      </Col>
                      <Col lg="2" className="nav-item-all">
                        <Link className="nav-item" to="/following">
                          Đang theo dõi
                        </Link>
                      </Col>
                      <Col lg="2" className="nav-item-all">
                        <Link className="nav-item" to="/follower">
                          Được theo dõi
                        </Link>
                      </Col>
                      <Col lg="2" className="d-flex">
                        <Nav.Item>
                          <img
                            className="image-item item-left"
                            src={notification}
                            alt="buying"
                          ></img>
                        </Nav.Item>
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            id="dropdown-custom-components"
                            as={CustomToggle}
                          ></Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-custom">
                            <Dropdown.ItemText
                              eventKey="1"
                              className="dropdown-custom-a"
                            >
                              Hello, {userInfo.username}
                            </Dropdown.ItemText>
                            <Dropdown.Item eventKey="2">
                              <Link to="/profile" className="user-profile-nav">
                                Profile
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                              eventKey="1"
                              onClick={Logout}
                            >
                              Log out
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ) : (
          <Navbar expand="sm" className="navbar-container">
            <Container style={{ padding: "0" }} fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand`}
                aria-labelledby={`offcanvasNavbarLabel-expand`}
                placement="end"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="navbar justify-content-center flex-grow-1 pe-3">
                    <img
                      style={{ width: "6rem", margin: "2rem 3rem" }}
                      src={brandLogo}
                      alt="brand"
                    ></img>
                    <Link to="/" className="nav-item">
                      Trang chủ
                    </Link>
                    <div className="button-navbar">
                      <>
                        <a
                          className="btn btn-primary login-button"
                          href="/login"
                        >
                          Đăng nhập
                        </a>
                        <a className="btn btn-primary" href="/register">
                          Đăng ký
                        </a>
                      </>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        )}
      </div>
      <Outlet />
      <Footers />
    </>
  );
}

export default NavbarPage;
