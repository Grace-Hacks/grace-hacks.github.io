import React from 'react';
import Countdown from 'react-countdown';

import Keyboard from '../../assets/keyboard.png'
import Landscape from '../../assets/landscape.png'
import './About.scss';

function About() {
  return (
    <div class="about-container" id="mission">
      <div class="about-section">
        <img class="image" src={Keyboard}></img>
        <div class="info">
          <div class="title">Create with Confidence</div>
          <div class="description">The aim of GraceHacks is to foster a welcoming and supportive hackathon environment for women and non-binary students. GraceHacks strives to empower these underrepresented groups and ensure that they have the confidence to create without inherent bias or sexism.</div>
        </div>
      </div>
      <div class="about-section">
        <div class="info">
          <div class="title">About Us</div>
          <div class="description">GraceHacks was started by a group of UCSC students who noticed the gender gap in S.T.E.M. and wanted to change that narrative. Our goal is to create a space for underrepresented groups to learn and explore their interests in tech and apply this knowledge in the real world.</div>
        </div>
        <img class="image" src={Landscape}></img>
      </div>
    </div>
  );
}

export default About;