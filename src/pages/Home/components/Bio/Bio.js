import React from 'react';
import './Bio.scss';


export default function Bio() {
  return (
    <div className="about-container" id="mission">
      <div className="about-section">
        <div className="about-section condense">
        <div className="info aligncorr">
          <div className="title">Santa Cruz's all inclusive hackathon for students of diverse genders</div>
          <div className="description toppt">The aim of GraceHacks is to foster a welcoming and supportive hackathon environment for students of diverse genders.</div>
          <div className="description toppt">We believe that anyone has the power to create something as long as they believe in themselves, and feel confident in their ability to learn and improve their technical skills.</div>
        </div>
        </div>
        </div>
        <div className="about-section">
          <div className="info">
            <div className="title">About Us</div>
            <div className="description abt">We strive to foster safe spaces, where women, non-binary students, and anyone who struggles to feel included in technical spaces can: create, learn, and explore their interests without inherent bias or sexism.</div>
            <div className="description abt">Look out for our annual hackathon, technical workshops, and upcoming events - We can’t create a community without YOU!  🖤️</div>
          </div>
      </div>
    </div>
  );
}