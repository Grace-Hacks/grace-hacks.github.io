import React from 'react';
import './Header.scss';
import Calendar from '../../assets/Calendar.svg'
import Location from '../../assets/Location.svg'
// import Lotus from '../../assets/Lotus.svg'
import LotusMobile from '../../assets/Lotus-Mobile.svg'
import Arrow from '../../assets/Header-Arrow.svg'
import Button from '@material-ui/core/Button';
import Lotus from '../../assets/lotuswater.png'
import Water from '../../assets/waterback.png'

function Header() {

  return (
    <div class="header-container">
      {/* <img class="lotus-mobile" src={Lotus}></img> */}
      <div class="banner" >
          {/* <img class="lotus-desktop"  src={Lotus}></img> */}
          <div class="gracehacks">GraceHacks</div>
          <div class="description">create with Confidence</div>
      </div>

      <div class="text-box">
          <div class="date-row">
            <img class="image" src={Calendar}></img>
            <div class="event">November 12-13th, 2022</div>
          </div>
          <div class="location-row">
            <img class="image" src={Location}></img>
            <div class="event">UCSC Engineering 2- Room 180</div>
          </div>


          <div class="buttons-row">
            <div  href="https://docs.google.com/forms/d/e/1FAIpQLSd6LCsyvIZ1Ed32deT-elAnIb3W6Vbk2C8OUFzeT-ZCJJzf_Q/viewform" class="button" >
              <div class="button-text">Register to mentor</div>
            </div> 

            <div href="https://docs.google.com/forms/d/e/1FAIpQLScWdAMZDQUqz6515dUwd7NLKyGsJWeLaJSl2YCgBzQbjszTJg/viewform" class="button" >
              <div class="button-text">Register to hack</div>
            </div> 

            <div  href="https://docs.google.com/forms/d/e/1FAIpQLSeVc55959_MUgShLuzZjLRLvr0iuiP79s2cUbp333YPCPSQag/viewform" class="button" >
              <div class="button-text">Register to judge</div>
            </div> 
          </div>


          {/* <div class="buttons-row">
            <Button disableRipple variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSd6LCsyvIZ1Ed32deT-elAnIb3W6Vbk2C8OUFzeT-ZCJJzf_Q/viewform" class="button" target="_blank" rel="noopener noreferrer">
              <div class="button-text">Register to mentor</div>
            </Button> 

            <Button disableRipple variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLScWdAMZDQUqz6515dUwd7NLKyGsJWeLaJSl2YCgBzQbjszTJg/viewform" class="button" target="_blank" rel="noopener noreferrer">
              <div class="button-text">Register to hack</div>
            </Button> 

            <Button disableRipple variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSeVc55959_MUgShLuzZjLRLvr0iuiP79s2cUbp333YPCPSQag/viewform" class="button" target="_blank" rel="noopener noreferrer">
              <div class="button-text">Register to judge</div>
            </Button> 
          </div> */}
        </div>
       
    </div>
  );
}

export default Header;