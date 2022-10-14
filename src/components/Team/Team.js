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
import TBDe from "../../assets/Team/tbd.png";
import Thanh from "../../assets/Team/thanh.png"
import Wing from "../../assets/Team/wing.png";
import Lotus from "../../assets/lotus1.png";


function Team() {
  return (
    <div class="team-container">
      <div class="title">
      team
      </div>

      <div class="row">
        <div class="member">
          <img class="picture" src={Maritza} alt="GraceHacks member" />
          <div class="name">Maritza Padilla</div>
          <div class="position">Co-Executive Lead</div>
          <div class="position">Tech Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Rina} alt="GraceHacks member" />
          <div class="name">Rina Munakata</div>
          <div class="position">Executive Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Lakshmi} alt="GraceHacks member" />
          <div class="name">Lakshmi Damodaran</div>
          <div class="position">Co-Executive Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>

      <div class="row">
        <div class="member">
          <img class="picture" src={Merilyn} alt="GraceHacks member" />
          <div class="name">Merilyn Kuo</div>
          <div class="position">Logistics Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Anusha} alt="GraceHacks member" />
          <div class="name">Anusha Pai</div>
          <div class="position">Logistics</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Lotus} alt="GraceHacks member" />
          <div class="name">Vaishnavi Ramanujan</div>
          <div class="position">Logistics</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Lotus} alt="GraceHacks member" />
          <div class="name">Hersh Kalsi</div>
          <div class="position">Logistics</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>

      <div class="row">
        <div class="member">
          <img class="picture" src={Andrew} alt="GraceHacks member" />
          <div class="name">Andrew Sanchez</div>
          <div class="position">Tech</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Thanh} alt="GraceHacks member" />
          <div class="name">Thanh To</div>
          <div class="position">Tech</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Ojal} alt="GraceHacks member" />
          <div class="name">Ojal Mapuskar</div>
          <div class="position">Tech</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>

      <div class="row">
        <div class="member">
          <img class="picture" src={Shirin} alt="GraceHacks member" />
          <div class="name">Shirin Rokni</div>
          <div class="position">Public Relations Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Ariam} alt="GraceHacks member" />
          <div class="name">Ariam Asmelash</div>
          <div class="position">Public Relations</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Wing} alt="GraceHacks member" />
          <div class="name">Wing Koon</div>
          <div class="position">Public Relations</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>

      <div class="row">
        <div class="member">
          <img class="picture" src={Tanisha} alt="GraceHacks member" />
          <div class="name">Tanisha Katoch</div>
          <div class="position">Sponsorship Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Lotus} lt="GraceHacks member" />
          <div class="name">Mia Santos</div>
          <div class="position">Sponsorship</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Lotus} lt="GraceHacks member" />
          <div class="name">Justin Keovongsa</div>
          <div class="position">Sponsorship</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Lotus} lt="GraceHacks member" />
          <div class="name">Natalie Hua</div>
          <div class="position">Sponsorship</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>

      <div class="row">
        <div class="member">
          <img class="picture" src={Jonathan} alt="GraceHacks member" />
          <div class="name">Jonathan He</div>
          <div class="position">Design Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Priya} alt="GraceHacks member" />
          <div class="name">Priya Charagondla</div>
          <div class="position">Design</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Sabrina} alt="GraceHacks member" />
          <div class="name">Sabrina Yone</div>
          <div class="position">Design</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>
    </div>
  );
}

export default Team;
