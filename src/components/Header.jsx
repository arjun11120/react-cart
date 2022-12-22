import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </> 
  )
}

export default Header
