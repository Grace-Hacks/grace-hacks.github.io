import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavigationBar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand className="mr-auto" href="#home">React - Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">FAQ</Nav.Link>
        <Nav.Link href="#link">Team</Nav.Link>
        <Nav.Link href="#link">Sponsors</Nav.Link>
        <Nav.Link href="#link">Contacts</Nav.Link>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavigationBar;