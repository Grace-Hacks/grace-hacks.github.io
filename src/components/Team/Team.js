import React from 'react';
import './Team.scss';
import Saniya from "../../assets/Team/Saniya.png";
import Anu from "../../assets/Team/Anu.png"
import Merilyn from "../../assets/Team/Merilyn.png";
import Sarah from "../../assets/Team/Sarah.png";
import Brina from "../../assets/Team/Brina.png";
import Maritza from "../../assets/Team/Maritza.png";
import Swetha from "../../assets/Team/Swetha.png";
import Kat from "../../assets/Team/Kat.png";
import Ana from "../../assets/Team/Ana.png";
import Venus from "../../assets/Team/Venus.png";
import Ojal from "../../assets/Team/Ojal.png";
import logo from "../../assets/logo.png";




function Team() {
  return (
    <div class="team-container">
      <div class="title">
      team
      </div>
      <div class="row">
        <div class="member">
          <img class="picture" src={Saniya} alt="GraceHacks member" />
          <div class="name">Saniya Doshi</div>
          <div class="position">Executive Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Kat} alt="GraceHacks member" />
          <div class="name">Katia Avila</div>
          <div class="position">Co-Executive Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>
      <div class="row">
        <div class="member">
          <img class="picture" src={Sarah} alt="GraceHacks member" />
          <div class="name">Sarah Avila</div>
          <div class="position">Tech Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Brina} alt="GraceHacks member" />
          <div class="name">Brina Bodnar</div>
          <div class="position">Tech</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Maritza} alt="GraceHacks member" />
          <div class="name">Maritza Padilla</div>
          <div class="position">Tech</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>
      <div class="row">
        <div class="member">
          <img class="picture" src={Anu} alt="GraceHacks member" />
          <div class="name">Anupreet Singh</div>
          <div class="position">Public Relations Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={logo} alt="GraceHacks member" />
          <div class="name">Fariha Lateef</div>
          <div class="position">Public Relations</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={logo} alt="GraceHacks member" />
          <div class="name">Jessica Kuang</div>
          <div class="position">Public Relations</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>
      <div class="row">
        <div class="member">
          <img class="picture" src={Ana} alt="GraceHacks member" />
          <div class="name">Ana Guo</div>
          <div class="position">Design Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Venus} alt="GraceHacks member" />
          <div class="name">Venus Ku</div>
          <div class="position">Design</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={logo} alt="GraceHacks member" />
          <div class="name">Menaha Gujavarthi</div>
          <div class="position">Design</div>
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
          <img class="picture" src={logo} alt="GraceHacks member" />
          <div class="name">Tresa Ignatius</div>
          <div class="position">Logistics</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Swetha} alt="GraceHacks member" />
          <div class="name">Swetha Thiru</div>
          <div class="position">Sponsorship Lead</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
        <div class="member">
          <img class="picture" src={Ojal} lt="GraceHacks member" />
          <div class="name">Ojal Mapuskar</div>
          <div class="position">Sponsorship</div>
          {/* <div class="pronouns">she/her/hers</div> */}
        </div>
      </div>
    </div>
  );
}

export default Team;
