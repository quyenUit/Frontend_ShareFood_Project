import React from "react";
import "../../styles/navbarPage.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import brandLogo from "../../images/logo-main.png";
import { Outlet } from "react-router-dom";
import user from "../../images/user.png";
import notification from "../../images/bell.png";
import Footers from "../Footer/Footers";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/users/userSlice";
import { Link } from "react-router-dom";
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
  return (
    <>
      <div>
        <Navbar bg="light" expand="sm" style={{ backgroundColor: "#FFF8EA" }}>
          <Container style={{ padding: "0" }} fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navbar justify-content-center flex-grow-1 pe-3">
                  <img
                    style={{ width: "6rem", margin: "0 2rem" }}
                    src={brandLogo}
                    alt="brand"
                  ></img>
                  <Link to="/" className="nav-item">
                    Trang chủ
                  </Link>
                  <Link to="/myfood" className="nav-item">
                    Thực phẩm của tôi
                  </Link>

                  <Link className="nav-item" to="post">
                    Thực phẩm nhận được
                  </Link>
                  <Link className="nav-item" to="#action2">
                    Đang theo dõi
                  </Link>
                  <Link className="nav-item" to="#action2">
                    Người theo dõi tôi
                  </Link>
                  <div className="button-navbar">
                    {userInfo ? (
                      <div className="user-dropdown d-flex justify-content-center">
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
                              <Link to="/profile" className="profile-user">
                                Profile
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                              eventKey="1"
                              onClick={() => dispatch(logout())}
                            >
                              Log out
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    ) : (
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
                    )}
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <Outlet />
      <Footers />
    </>
  );
}

export default NavbarPage;
