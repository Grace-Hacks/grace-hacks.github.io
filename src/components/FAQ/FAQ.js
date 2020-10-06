import React from 'react';
import './FAQ.css';

function FAQ() {
  function toggleState(id) {
    if (document.getElementById(id).style.display === '') {
      document.getElementById(id).style.display = 'block';
    }

    if (document.getElementById(id).style.display === 'none') {
      document.getElementById(id).style.display = 'block';
    } else if (document.getElementById(id).style.display === 'block') {
      document.getElementById(id).style.display = 'none';
    }
  };

  return (
  <div>
    <div class="page-title">
      <div class="letter">F</div>
      <div class="letter">A</div>
      <div class="letter">Q</div>
    </div>
    <div class="faq-section">
      <div class="faq-row" style={{minHeight: "515px"}}>
        <div class="module">
          <div class="faq-title" onClick={() => {toggleState("one")}}><div class= 'ques'>What is a hackathon?</div> <img src={require("./vector.svg")} class="arrow"/></div>
          <div class="faq-answer" id="one">A hackathon is a place where you can collaborate with others and express your creativity to create a product that solves some real-world problem. At GraceHacks, students of all different backgrounds and experiences will gather together to develop an idea and realize that solution all within the span of 12 hours!</div>
        </div>
        <div class="module">
          <div class="faq-title" onClick={() => {toggleState("two")}}><div class= 'ques'>Who can attend?</div> <img src={require("./vector.svg")} class="arrow"/></div>
          <div class="faq-answer" id="two">All female-identifying or non-binary college students (both undergraduates and graduates) are invited to attend, even with no prior experience necessary!</div>
        </div>
        <div class="module">
          <div class="faq-title" onClick={() => {toggleState("three")}}><div class= 'ques'>What if I don’t have a team or idea?</div> <img src={require("./vector.svg")} class="arrow"/></div>
          <div class="faq-answer" id="three">No worries! We’ll have a short activity at the beginning of the hackathon, where you can meet others who you might want to collaborate with :-)</div>
        </div>
        <div class="module">
          <div class="faq-title" onClick={() => {toggleState("four")}}><div class= 'ques'>What if I don’t know how to code?</div> <img src={require("./vector.svg")} class="arrow"/></div>
          <div class="faq-answer" id="four">GraceHacks is a wonderful place to get your feet wet in software development! Not a technical major? Don’t worry ~ the best hackathon teams  delicately balance graphic designers, project managers, and business associates as well!</div>
        </div>
        <div class="module">
          <div class="faq-title" onClick={() => {toggleState("five")}}><div class= 'ques'>How do I attend?</div> <img src={require("./vector.svg")} class="arrow"/></div>
          <div class="faq-answer" id="five">This event is completely virtual. As long as you have internet connection and accessability to Zoom you are good to go!</div>
        </div>
        <div class="module">
          <div class="faq-title" onClick={() => {toggleState("six")}}><div class= 'ques'>What can I create?</div> <img src={require("./vector.svg")} class="arrow"/></div>
          <div class="faq-answer" id="six">Anything your heart desires! Hardware products, software applications, gaming interfaces ~ if you can dream it, you can build it!</div>
        </div>
        <div class="module">
          <div class="faq-title" onClick={() => {toggleState("seven")}}><div class= 'ques'>How much does it cost?</div> <img src={require("./vector.svg")} class="arrow"/></div>
          <div class="faq-answer" id="seven">GraceHacks will be absolutely FREE! We’ll provide food, swag, caffeine, WiFi, and a collaborative workspace to get your projects up and running quickly!</div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default FAQ;