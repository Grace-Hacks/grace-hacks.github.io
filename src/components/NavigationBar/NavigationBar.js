import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll } from 'react-scroll';

function NavigationBar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <a onClick={() => animateScroll.scrollToTop() }>GraceHacks</a>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="ml-auto">
          <Link activeClass="active" to="about-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 } style={{ marginRight: '2em', fontWeight: 'bold' }}>About</Link>
          <Link activeClass="active" to="faq-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 } style={{ marginRight: '2em', fontWeight: 'bold' }}>FAQ</Link>
          <Link activeClass="active" to="team-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 } style={{ marginRight: '2em', fontWeight: 'bold' }}>Team</Link>
          <Link activeClass="active" to="sponsors-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 } style={{ marginRight: '2em', fontWeight: 'bold' }}>Sponsors</Link>
          <Link activeClass="active" to="contacts-section" spy={ true } smooth={ true } offset={ -70 } duration= { 500 } style={{ fontWeight: 'bold' }}>Contacts</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;