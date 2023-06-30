import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from "../../img/Nuevos Horizontes.png";
import "./navbar.css";

function NavNolog() {
  return (
    <Navbar collapseOnSelect expand="lg" className="container-color">
      <Container className="container-color">
        <Navbar.Brand href="/">
          <div className="logo-container">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: '#f8f9fa' }}>Inicio</Nav.Link>
            <NavDropdown
              title="Nosotros"
              id="collasible-nav-dropdown"
              className="container-color navbar-color"
            >
              <NavDropdown.Item href="/nosotros">Sobre Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="/contacto">Contáctanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login" style={{ color: '#f8f9fa' }}>Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavNolog;


