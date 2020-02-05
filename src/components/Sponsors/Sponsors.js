import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function Sponsors() {
  return (

    <Container style={{paddingTop:"50px"}} id="-section"> 
      <h1 style={{paddingTop:"5px"}}> SPONSORS</h1> 
      <div style={{paddingTop:"5px"}} id="sponsors-section">
        <Button  variant="primary">Sponsor GraceHacks Today!</Button>

        <div> 
          We are still looking for sponsors for GraceHacks 2020. Please reach out to us if you're interested in helping us make this hackathon a success.        
        </div>

      </div>


      <a href = "https://www.nutanix.com/en" target="_blank"> 
        <img style={{paddingRight:"25px"}} src={require('./Nutanix.jpeg')} width = "350px" height = "350px" alt="Nutanix-1000"/>
      </a>

      <a href = "https://balsamiq.com/" target="_blank"> 
        <img style={{paddingRight:"25px"}, {paddingLeft:"25px"}} src={require('./Balsamiq.png')} width = "180px" height = "130px" alt="balsamiq-500"/>
      </a>

      <a href = "https://www.linode.com/" target="_blank"> 
        <img style={{paddingRight:"25px"}, {paddingLeft:"25px"}} src={require('./Linode.png')} width = "270px" height = "300px" alt="linode-400"/>
      </a>
       
      <a href = "https://www.digitalocean.com/" target="_blank">  
        <img style={{paddingRight:"25px"}, {paddingLeft:"25px"}} src={require('./DigitalOcean.png')} width = "120px" height = "120px" alt="digitalOcean-200Stickers"/>
      </a>

      <a href = "https://www.desmos.com/" target="_blank"> 
        <img style={{paddingRight:"25px"}, {paddingLeft:"25px"}} src={require('./Desmos.jpeg')} width = "100px" height = "100px" alt="Desmos-Swag"/>
      </a>

      <a href = "https://www.interviewcake.com/" target="_blank">
        <img style={{paddingRight:"25px"}, {paddingLeft:"25px"}} src={require('./InterviewCake.png')} width = "190px" height = "90px" alt="interviewCake-freeLicense"/>
      </a>

      <a href = "https://www.girlsmakegames.com/" target="_blank">
        <img style={{paddingRight:"25px"}, {paddingLeft:"25px"}} src={require('./gmg.jpeg')} width = "100px" height = "100px" alt="gmg-swag"/> 
      </a>

      <a href = "https://cloudsploit.com/" target="_blank">
        <img style={{paddingRight:"25px"}, {paddingLeft:"25px"}} src={require('./CloudSploit.png')} width = "100px" height = "100px" alt="cloudSploit-1monthFreeTrial"/>
      </a>

    </Container>
     
  );
}

export default Sponsors;
