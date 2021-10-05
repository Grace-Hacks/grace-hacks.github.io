import React from 'react';
import './About.scss';
import Petal from '../../assets/About-petal.svg'
import Fish from '../../assets/About-fish.svg'


function About() {
  return (
    <div class="about-container" id="mission">
      <div class="about-section">
      <img class="petal" src={Petal}></img>
        <div class="info">
          <div class="title">create with confidence</div>
          <div class="description">The aim of GraceHacks is to foster a welcoming and supportive hackathon environment for women and non-binary students. GraceHacks strives to empower these underrepresented groups and ensure that they have the confidence to create without inherent bias or sexism.</div>
          <div class="title">about</div>
          <div class="description">GraceHacks was started by a group of UCSC students who noticed the gender gap in S.T.E.M. and wanted to change that narrative. Our goal is to create a space for underrepresented groups to learn and explore their interests in tech and apply this knowledge in the real world.</div>
        </div>
        <img class="fish" src={Fish}></img>
      </div>
    </div>
  );
}

export default About;