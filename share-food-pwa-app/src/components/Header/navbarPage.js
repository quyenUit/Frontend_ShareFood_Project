import React from 'react';
import '../../styles/navbarPage.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Dropdown} from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import brandLogo from '../../images/brand.png';
import { useLocation } from 'react-router-dom';
import user from '../../images/user.png';
import notification from '../../images/bell.png';
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a href={ref} style={{textDecoration: "none"}} onClick={(e) => {
      e.preventDefault();
      onClick(e);}}>
    {children}
    <img className="image-item item-left" src={user} alt="buying"></img>
  </a>
));
function NavbarPage(){
  const location = useLocation();
  return(
      <>
        <Navbar bg="light" expand="sm" style={{backgroundColor: "#FFF8EA"}}>
          <Container style={{padding: "0"}} fluid>
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
                  <Nav.Link className="nav-item" href="#action1">Trang chủ</Nav.Link>
                  <Nav.Link className="nav-item" href="#action2">Tin Food</Nav.Link>
                  <img style={{width: "6rem", margin:"0 2rem"}} src={brandLogo} alt="brand"></img>
                  <Nav.Link className="nav-item" href="#action2">Đăng Tin</Nav.Link>
                  <Nav.Link className="nav-item" href="#action2">Tin nhắn</Nav.Link>
                  <div className="button-navbar">
                    {
                      location.state?
                      (
                        <div className='user-dropdown d-flex justify-content-center'>
                          <Nav.Item><img className="image-item item-left" src={notification} alt="buying"></img></Nav.Item>
                          <Dropdown align="end">
                            <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle}></Dropdown.Toggle>
                            <Dropdown.Menu className='dropdown-custom'>
                                <Dropdown.ItemText eventKey="1" className='dropdown-custom-a'>Hello, {location.state.lname}</Dropdown.ItemText>
                                <Dropdown.Item eventKey="2">Profile</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Settings</Dropdown.Item>
                                <Dropdown.Item eventKey="1">Log out</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      )
                      :
                      (
                        <>
                          <a className="btn btn-primary login-button" href='/login'>Đăng nhập</a>
                          <a className="btn btn-primary" href='/login'>Đăng kí</a>
                        </>
                      )
                    }
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavbarPage;