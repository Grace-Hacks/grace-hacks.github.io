import React from 'react';
import './Team.css';

function Team() {
  return (
    <div class="team-container">
      <div class="team-title">
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
      <div class="team-row">
        <div class="member">
          <img src={require("./Saniya.png")} alt="GraceHacks member" />
          <div class="name">Saniya Doshi</div>
          <div class="position">Executive Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="team-row">
        <div class="member">
          <img src={require("./Desi.png")} alt="GraceHacks member" />
          <div class="name">Desiderio Ascencio</div>
          <div class="position">Logistics Lead</div>
          <div class="pronouns">he/him/his</div>
        </div>
        <div class="member">
          <img src={require("./Anu.png")} alt="GraceHacks member" />
          <div class="name">Anupreet Singh</div>
          <div class="position">Logistics</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img src={require("./Mackenzi.png")} alt="GraceHacks member" />
          <div class="name">Mackenzi Rauls</div>
          <div class="position">Logistics</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img src={require("./Merilyn.png")} alt="GraceHacks member" />
          <div class="name">Merilyn Kuo</div>
          <div class="position">Logistics</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="team-row">
        <div class="member">
          <img src={require("./Navya.png")} alt="GraceHacks member" />
          <div class="name">Navya Rao</div>
          <div class="position">Public Relations Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img src={require("./Sathya.png")} alt="GraceHacks member" />
          <div class="name">Sathya Gadhiraju</div>
          <div class="position">Public Relations</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="team-row">
        <div class="member">
          <img src={require("./Tim.png")} alt="GraceHacks member" />
          <div class="name">Tim Nguyen</div>
          <div class="position">Tech Lead</div>
          <div class="pronouns">he/him/his</div>
        </div>
        <div class="member">
          <img src={require("./Sarah.png")} alt="GraceHacks member" />
          <div class="name">Sarah Avila</div>
          <div class="position">Tech</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="team-row">
        <div class="member">
          <img src={require("./Namratha.png")} alt="GraceHacks member" />
          <div class="name">Namratha Prithviraj</div>
          <div class="position">Sponsorship Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img src={require("./Swetha.png")} alt="GraceHacks member" />
          <div class="name">Swetha Thiru</div>
          <div class="position">Sponsorship</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img src={require("./Simran.png")} alt="GraceHacks member" />
          <div class="name">Simran Gunsi</div>
          <div class="position">Design Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img src={require("./Rishika.png")} alt="GraceHacks member" />
          <div class="name">Rishika Singh</div>
          <div class="position">Project Manager</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
    </div>
  );
}

export default Team;
