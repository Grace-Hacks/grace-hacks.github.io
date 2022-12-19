import React from 'react';
import './About.scss';
import Petal from '../../assets/About-petal.svg'
import Fish from '../../assets/purpfish.svg'


function About() {
  return (
    <div class="about-container" id="mission">
      <div class="about-section">
        <img class="petal" src={Petal}></img>
        <div class="about-section condense">
        <div class="info aligncorr">
          <div class="title">Santa Cruz's all inclusive hackathon for students of diverse genders</div>
          <div class="description toppt">The aim of GraceHacks is to foster a welcoming and supportive hackathon environment for students of diverse genders.</div>
          <div class="description toppt">We believe that anyone has the power to create something as long as they believe in themselves, and feel confident in their ability to learn and improve their technical skills.</div>
        </div>
        <img class="fish" src={Fish}></img>
        </div>
        </div>
        <div class="about-section">
          <div class="info">
            <div class="title">About Us</div>
            <div class="description abt">We strive to foster safe spaces, where women, non-binary students, and anyone who struggles to feel included in technical spaces can: create, learn, and explore their interests without inherent bias or sexism.</div>
            <div class="description abt">Look out for our annual hackathon, technical workshops, and upcoming events- We can’t create a community without YOU!  🖤️</div>
          </div>
      </div>
    </div>
  );
}

export default About;