import React from 'react';
import './Gallery.scss';
import P1 from "../../assets/Gallery/winner.JPG";
import P2 from "../../assets/Gallery/group.jpg";
import P3 from "../../assets/Gallery/mentorimg.jpg";
import P4 from "../../assets/Gallery/tinyteam.jpeg";
import P5 from "../../assets/Gallery/winners3.png";
import P6 from "../../assets/Gallery/tinyGHteam3.jpeg";
import P7 from "../../assets/Gallery/tinyGHteam.JPG";
import P8 from "../../assets/Gallery/winners4.JPG";
import P9 from "../../assets/Gallery/tinymentors.jpeg";
import P10 from "../../assets/Gallery/tinymerch.jpeg";
import P11 from "../../assets/Gallery/tinyjudges.jpeg";
import P12 from "../../assets/Gallery/tinyteam4.jpeg";
import P13 from "../../assets/Gallery/tinyGHteam2.jpeg";
import P14 from "../../assets/Gallery/tinySpeaker.jpeg";
import P15 from "../../assets/Gallery/winners2.jpg";
import P16 from "../../assets/Gallery/tinyteam2.jpeg";
import P17 from "../../assets/Gallery/tinyhackers.jpeg";
import P18 from "../../assets/Gallery/tinyshirt.jpeg";

let assets = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18];
function Team() {
  return (
    <div class="gallery-container" id="events">
      <div class="marquee2">
        <div class="marquee--inner2">
          <div class="spin2">
          {assets.map((item, index) => { 
            return <img class="orb2" src={item} alt="GraceHacks member" />
          })}
          </div>
          <div class="spin2">
          {assets.map((item, index) => { 
            return <img class="orb2" src={item} alt="GraceHacks member" />
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;