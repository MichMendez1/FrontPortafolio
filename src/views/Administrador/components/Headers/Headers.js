import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Headers() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./homeadmin">Inicio</Nav.Link>
            <Nav.Link href="./RegisterHome">Registrar</Nav.Link>
            <Nav.Link href="./">Actualizar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers
