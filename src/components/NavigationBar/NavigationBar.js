import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavigationBar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">React - Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
          <Nav.Link href="#link">Team</Nav.Link>
          <Nav.Link href="#link">Sponsors</Nav.Link>
          <Nav.Link href="#link">Contacts</Nav.Link>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavigationBar;