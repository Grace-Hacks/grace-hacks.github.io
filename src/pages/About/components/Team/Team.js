import React from 'react';
import './Team.scss';
import Andrew from "../../../../assets/Team/andrew.png";
import Anusha from "../../../../assets/Team/anusha.png";
import Ariam from "../../../../assets/Team/ariam.png";
import Jonathan from "../../../../assets/Team/jonathan.png";
import Lakshmi from "../../../../assets/Team/lakshmi.png";
import Maritza from "../../../..//assets/Team/maritza.png";
import Merilyn from "../../../..//assets/Team/merilyn.png";
import Ojal from "../../../../assets/Team/ojal.png";
import Priya from "../../../..//assets/Team/priya.png";
import Rina from "../../../../assets/Team/rina.png";
import Sabrina from "../../../..//assets/Team/sabrina.png";
import Shirin from "../../../../assets/Team/shirin.png";
import Tanisha from "../../../..//assets/Team/tanisha.png";
import Thanh from "../../../..//assets/Team/thanh.png";
// import TBDe from "../../assets/Team/tbd.png";
import Wing from "../../../../assets/Team/wing.png";
import Lotus from "../../../../assets/lotus1.png";

let members = {'Maritza Padilla':['Co-Exec Lead', 'Tech Lead'], 'Rina Munakata':['Co-Exec Lead'], 'Jonathan He':['Co-Exec Lead', 'Design Lead'], 'Lakshmi Damodaran':['Co-Exec Lead'], 
'Merilyn Kuo':['Logistics Lead'], 'Anusha Pai':['Logistics'], 'Hersh Kalsi':['Logistics'], 
'Andrew Sanchez':['Tech'], 'Thanh To':['Tech'], 'Ojal Mapuskar':['Tech'], 'Shirin Rokni':['Public Relations Lead'], 'Ariam Amelash':['Public Relations'],
'Wing Koon':['Public Relations'], 'Tanisha Katoch':['Sponsorship Lead'], 'Justin Keovongsa':['Sponsorship'], 'Priya Charagondla': ['Design'], 'Sabrina Yone': ['Design']};

let assets = [Maritza, Rina, Jonathan, Lakshmi, Merilyn, Anusha, Lotus, Andrew,
Thanh, Ojal, Shirin, Ariam, Wing, Tanisha, Lotus, Priya, Sabrina]
function Team() {
  return (
    <div className="team-container" id="team">
      <div className="marquee">
        <div className="marquee--inner">
          <div className="spin">
          {assets.map((item, index) => { 
            return <img className="orb" key={index} src={item} alt="GraceHacks member" />
          })}
          </div>
          <div className="spin">
          {assets.map((item, index) => { 
            return <img className="orb" key={index} src={item} alt="GraceHacks member" />
          })}
          </div>
          <div className="spin">
          {Object.keys(members).map((key, index) => (
            (members[key].length > 1 ? <div className="member-name" key={index}> {key} <br/> <span style={{'color': '#5B5C74', 'fontWeight':'light'}}>{members[key][0]}</span> <br/> <span style={{'color': '#5B5C74', 'fontWeight':'light'}}>{members[key][1]}</span></div> : <div className="member-name" key={index}> {key} <br/> <span style={{'color': '#5B5C74', 'fontWeight':'light'}}>{members[key]}</span></div>)
          ))}
          </div>
          <div className="spin">
          {Object.keys(members).map((key, index) => (
            (members[key].length > 1 ? <div className="member-name" key={index}> {key} <br/> <span style={{'color': '#5B5C74', 'fontWeight':'light'}}>{members[key][0]}</span> <br/> <span style={{'color': '#5B5C74', 'fontWeight':'light'}}>{members[key][1]}</span></div> : <div className="member-name" key={index}> {key} <br/> <span style={{'color': '#5B5C74', 'fontWeight':'light'}}>{members[key]}</span></div>)
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;