import '../../styles/navbarPage.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import brandLogo from '../../images/brand.png'
function NavbarPage(){
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
                  <Nav.Link class="nav-item" href="#action1">Trang chủ</Nav.Link>
                  <Nav.Link class="nav-item" href="#action2">Tin Food</Nav.Link>
                  <img style={{width: "6rem", margin:"0 2rem"}} src={brandLogo}></img>
                  <Nav.Link class="nav-item" href="#action2">Đăng Tin</Nav.Link>
                  <Nav.Link class="nav-item" href="#action2">Tin nhắn</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavbarPage;