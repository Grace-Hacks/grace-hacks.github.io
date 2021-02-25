import React from 'react';
import './Team.scss';
import Saniya from "../../assets/Team/Saniya.png";
import Simran from "../../assets/Team/Simran.png";
import Rishika from "../../assets/Team/Rishika.png";
import Desi from "../../assets/Team/Desi.png";
import Anu from "../../assets/Team/Anu.png"
import Mackenzi from "../../assets/Team/Mackenzi.png";
import Merilyn from "../../assets/Team/Merilyn.png";
import Tim from "../../assets/Team/Tim.png";
import Sarah from "../../assets/Team/Sarah.png";
import Brina from "../../assets/Team/Brina.png";
import Maritza from "../../assets/Team/Maritza.png";
import Navya from "../../assets/Team/Navya.png";
import Sathya from "../../assets/Team/Sathya.png";
import Namratha from "../../assets/Team/Namratha.png";
import Swetha from "../../assets/Team/Swetha.png";


function Team() {
  return (
    <div class="team-container">
      <div class="title">
        <div class="word">
          <div class="letter">T</div>
          <div class="letter">H</div>
          <div class="letter">E</div>
        </div>

        <div class="spacer"></div>

        <div class="word">
          <div class="letter">T</div>
          <div class="letter">E</div>
          <div class="letter">A</div>
          <div class="letter">M</div>
        </div>
      </div>
      <div class="row">
        <div class="member">
          <img class="picture" src={Saniya} alt="GraceHacks member" />
          <div class="name">Saniya Doshi</div>
          <div class="position">Executive Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Simran} alt="GraceHacks member" />
          <div class="name">Simran Gunsi</div>
          <div class="position">Design Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Rishika} alt="GraceHacks member" />
          <div class="name">Rishika Singh</div>
          <div class="position">Project Manager</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="row">
        <div class="member">
          <img class="picture" src={Desi} alt="GraceHacks member" />
          <div class="name">Desiderio Ascencio</div>
          <div class="position">Logistics Lead</div>
          <div class="pronouns">he/him/his</div>
        </div>
        <div class="member">
          <img class="picture" src={Anu} alt="GraceHacks member" />
          <div class="name">Anupreet Singh</div>
          <div class="position">Logistics</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Mackenzi} alt="GraceHacks member" />
          <div class="name">Mackenzi Rauls</div>
          <div class="position">Logistics</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Merilyn} alt="GraceHacks member" />
          <div class="name">Merilyn Kuo</div>
          <div class="position">Logistics</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="row">
        <div class="member">
          <img class="picture" src={Tim} alt="GraceHacks member" />
          <div class="name">Tim Nguyen</div>
          <div class="position">Tech Lead</div>
          <div class="pronouns">he/him/his</div>
        </div>
        <div class="member">
          <img class="picture" src={Sarah} alt="GraceHacks member" />
          <div class="name">Sarah Avila</div>
          <div class="position">Tech</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Brina} alt="GraceHacks member" />
          <div class="name">Brina Bodnar</div>
          <div class="position">Tech</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Maritza} alt="GraceHacks member" />
          <div class="name">Maritza Padilla</div>
          <div class="position">Tech</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="row">
        <div class="member">
          <img class="picture" src={Navya} alt="GraceHacks member" />
          <div class="name">Navya Rao</div>
          <div class="position">Public Relations Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Sathya} alt="GraceHacks member" />
          <div class="name">Sathya Gadhiraju</div>
          <div class="position">Public Relations</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Namratha} alt="GraceHacks member" />
          <div class="name">Namratha Prithviraj</div>
          <div class="position">Sponsorship Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={Swetha} alt="GraceHacks member" />
          <div class="name">Swetha Thiru</div>
          <div class="position">Sponsorship</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
    </div>
  );
}

export default Team;
