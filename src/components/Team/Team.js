import React from 'react';
import './Team.scss';
import Andrew from "../../assets/Team/andrew.png";
import Anusha from "../../assets/Team/anusha.png";
import Ariam from "../../assets/Team/ariam.png";
import Jonathan from "../../assets/Team/jonathan.png";
import Lakshmi from "../../assets/Team/lakshmi.png";
import Maritza from "../../assets/Team/maritza.png";
import Merilyn from "../../assets/Team/merilyn.png";
import Ojal from "../../assets/Team/ojal.png";
import Priya from "../../assets/Team/priya.png";
import Rina from "../../assets/Team/rina.png";
import Sabrina from "../../assets/Team/sabrina.png";
import Shirin from "../../assets/Team/shirin.png";
import Tanisha from "../../assets/Team/tanisha.png";
import Thanh from "../../assets/Team/thanh.png";
import TBDe from "../../assets/Team/tbd.png";
import Wing from "../../assets/Team/wing.png";
import Lotus from "../../assets/Lotus.svg";

let members = {'Maritza Padilla':['Co-Exec Lead', 'Tech Lead'], 'Rina Munakata':['Co-Exec Lead'], 'Jonathan He':['Co-Exec Lead', 'Design Lead'], 'Lakshmi Damodaran':['Co-Exec Lead'], 
'Merilyn Kuo':['Logistics Lead'], 'Anusha Pai':['Logistics'], 'Hersh Kalsi':['Logistics'], 
'Andrew Sanchez':['Tech'], 'Thanh To':['Tech'], 'Ojal Mapuskar':['Tech'], 'Shirin Rokni':['Public Relations Lead'], 'Ariam Amelash':['Public Relations'],
'Wing Koon':['Public Relations'], 'Tanisha Katoch':['Sponsorship Lead'], 'Justin Keovongsa':['Sponsorship'], 'Priya Charagondla': ['Design'], 'Sabrina Yone': ['Design']};

let assets = [Maritza, Rina, Jonathan, Lakshmi, Merilyn, Anusha, Lotus, Andrew,
Thanh, Ojal, Shirin, Ariam, Wing, Tanisha, Lotus, Priya, Sabrina]
function Team() {
  return (
    <div class="team-container">
      <div class="marquee">
        <div class="marquee--inner">
          <div class="spin">
          {assets.map((item, index) => { 
            return <img class="orb" src={item} alt="GraceHacks member" />
          })}
          </div>
          <div class="spin">
          {assets.map((item, index) => { 
            return <img class="orb" src={item} alt="GraceHacks member" />
          })}
          </div>
          <div class="spin">
          {
            Object.keys(members).map((key, index) => ( 
              <span class="member-name"> {key} | {members[key]}</span>
            ))
          }
          </div>
          <div class="spin">
          {
            Object.keys(members).map((key, index) => ( 
              <span class="member-name"> {key} | {members[key]}</span>
            ))
          }
          </div>

        </div>
      </div>
    </div>
  );
}

export default Team;