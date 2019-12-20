import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll } from 'react-scroll';

function NavigationBar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">React - Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link activeClass="active" to="about-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 }>About</Link>
          <Link activeClass="active" to="faq-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 }>FAQ</Link>
          <Link activeClass="active" to="team-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 }>Team</Link>
          <Link activeClass="active" to="sponsors-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 }>Sponsors</Link>
          <Link activeClass="active" to="contacts-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 }>Contacts</Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavigationBar;