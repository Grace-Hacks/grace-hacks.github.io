import React from 'react';
import './Team.css';

function Team() {
  return (
    <div class="team-container">
      <div class="team-title">
        <div class="letter">T</div>
        <div class="letter">H</div>
        <div class="letter">E</div> 

        <div class="spacer"></div>
        
        <div class="letter">T</div>
        <div class="letter">E</div>
        <div class="letter">A</div>
        <div class="letter">M</div>
      </div>
      <div class="team-row">
        <div class="member">
          <img class="picture" src={require("./Saniya.png")} alt="GraceHacks member" />
          <div class="name">Saniya Doshi</div>
          <div class="position">Executive Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="team-row">
        <div class="member">
          <img class="picture" src={require("./Desi.png")} alt="GraceHacks member" />
          <div class="name">Desiderio Ascencio</div>
          <div class="position">Logistics Lead</div>
          <div class="pronouns">he/him/his</div>
        </div>
        <div class="member">
          <img class="picture" src={require("./Anu.png")} alt="GraceHacks member" />
          <div class="name">Anupreet Singh</div>
          <div class="position">Logistics</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="team-row">
        <div class="member">
          <img class="picture" src={require("./Navya.png")} alt="GraceHacks member" />
          <div class="name">Navya Rao</div>
          <div class="position">Public Relations Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={require("./Sathya.png")} alt="GraceHacks member" />
          <div class="name">Sathya Gadhiraju</div>
          <div class="position">Public Relations</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="team-row">
        <div class="member">
          <img class="picture" src={require("./Tim.png")} alt="GraceHacks member" />
          <div class="name">Tim Nguyen</div>
          <div class="position">Tech Lead</div>
          <div class="pronouns">he/him/his</div>
        </div>
        <div class="member">
          <img class="picture" src={require("./Jennie.jpg")} alt="GraceHacks member" />
          <div class="name">Jennie Nguyen</div>
          <div class="position">Tech</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
      <div class="team-row">
        <div class="member">
          <img class="picture" src={require("./Namratha.png")} alt="GraceHacks member" />
          <div class="name">Namratha Prithviraj</div>
          <div class="position">Sponsorship Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
        <div class="member">
          <img class="picture" src={require("./Simran.png")} alt="GraceHacks member" />
          <div class="name">Simran Gunsi</div>
          <div class="position">Design Lead</div>
          <div class="pronouns">she/her/hers</div>
        </div>
      </div>
    </div>
  );
}

export default Team;
