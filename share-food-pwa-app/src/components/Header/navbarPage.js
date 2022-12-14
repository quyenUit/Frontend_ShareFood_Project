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
import NotificationNavbar from "./NotificationNavbar";
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

const NotifyToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href={ref}
    style={{ textDecoration: "none" }}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <img className="image-item item-left" src={notification} alt="buying"></img>
  </a>
));

function NavbarPage() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/");
    dispatch(logout());
  };

  const { needOrders } = useSelector((state) => state.order);

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
                          Trang ch???
                        </Link>
                      </Col>
                      <Col lg="2" className="nav-item-all">
                        <Link to="/myfood" className="nav-item">
                          Th???c ph???m c???a t??i
                        </Link>
                      </Col>
                      <Col lg="2" className="nav-item-all">
                        <Link className="nav-item" to="/mygetfood">
                          Th???c ph???m nh???n ???????c
                        </Link>
                      </Col>
                      <Col lg="2" className="nav-item-all">
                        <Link className="nav-item" to="/following">
                          ??ang theo d??i
                        </Link>
                      </Col>
                      <Col lg="2" className="nav-item-all">
                        <Link className="nav-item" to="/follower">
                          ???????c theo d??i
                        </Link>
                      </Col>
                      <Col lg="2" className="d-flex">
                        <Dropdown align="end">
                          <Dropdown.Toggle
                            id="dropdown-custom-components"
                            as={NotifyToggle}
                          ></Dropdown.Toggle>
                          <NotificationNavbar needOrders={needOrders} />
                          <div className="count-notification">
                            <p className="position-relative d-flex justify-content-center">
                              {needOrders.length}
                            </p>
                          </div>
                        </Dropdown>
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
                            <Dropdown.Item eventKey="1" onClick={Logout}>
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
                      Trang ch???
                    </Link>
                    <div className="button-navbar">
                      <>
                        <a
                          className="btn btn-primary login-button"
                          href="/login"
                        >
                          ????ng nh???p
                        </a>
                        <a className="btn btn-primary" href="/register">
                          ????ng k??
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
