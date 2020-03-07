import React from 'react';
import { Container } from 'reactstrap';

function Contacts() {
  return (

     <Container style={{paddingTop:"25px", paddingBottom:"25px"}} id="team-section">
       <h1 style={{paddingTop:"100px"}}> CONTACT US!</h1>

       <div id="contacts-section">Check out our Instagram! OR Contact us @ gracehacks@gmail.com! OR Check out our LinkedIn!</div>

          <a href = "https://www.instagram.com/gracehacks/" target="_blank" rel="noopener noreferrer">
            <img style={{paddingRight:"25px"}} src={require('./InstagramLogo.jpeg')} width = "100px" height = "100px" alt="Instagram-Logo"/>
          </a>

          <a href = "https://mail.google.com/mail/u/4/#inbox" target="_blank" rel="noopener noreferrer">
            <img style={{paddingRight:"25px"}} src={require('./GmailLogo.png')} width = "100px" height = "90px" alt="Gmail-Logo"/>
          </a>

          <a href = "https://www.linkedin.com/company/gracehacks/about/" target="_blank" rel="noopener noreferrer">
            <img style={{paddingRight:"25px"}} src={require('./LinkedIn-Logo.png')} width = "100px" height = "110px" alt="LinkedIn-Logo"/>
          </a>




    </Container >

  );
}

export default Contacts;
