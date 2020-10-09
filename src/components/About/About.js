import React from 'react';
import Countdown from 'react-countdown';

import Keyboard from '../../assets/keyboard.png'
import './About.scss';

function About() {
  return (
    <div class="about-container" id="mission">
      <img class="image" src={Keyboard}></img>
      <div class="info">
        <div class="title">Create with Confidence</div>
        <div class="description">The aim of GraceHacks is to foster a welcoming and supportive hackathon environment for women and non-binary students. GraceHacks strives to empower these underrepresented groups and ensure that they have the confidence to create without inherent bias or sexism.</div>
        <Countdown date={"2020-10-17T18:00:00Z"} daysInHours="true" /> Hours
      </div>
    </div>
  );
}

export default About;