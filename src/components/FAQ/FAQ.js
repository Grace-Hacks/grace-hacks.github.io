import React from 'react';
import './FAQ.scss';

function FAQ() {
  function toggleState(id) {
    if (document.getElementById(id).style.visibility === '') {
      document.getElementById(id).style.visibility = 'visible';
      document.getElementById(id).style.opacity = 1;
    }

    if (document.getElementById(id).style.visibility === 'hidden') {
      document.getElementById(id).style.visibility = 'visible';
      document.getElementById(id).style.opacity = 1;
    } else if (document.getElementById(id).style.visibility === 'visible') {
      document.getElementById(id).style.visibility = 'hidden';
      document.getElementById(id).style.opacity = 0;
    }
  };

  return (
    <div class="faq-section">
      <div class="row" style={{minHeight: "515px"}}>
        <div class="module">
          <div class="title" onClick={() => {toggleState("one")}}>What is a hackathon?</div>
          <div class="answer" id="one">A hackathon is a place where you can collaborate with others and express your creativity to create a product that solves some real-world problem. At GraceHacks, students of all different backgrounds and experiences will gather together to develop an idea and realize that solution all within the span of 12 hours!</div>
        </div>
        <div class="module">
          <div class="title" onClick={() => {toggleState("two")}}>What should I bring?</div>
          <div class="answer" id="two">Be sure to bring an ID, a laptop (with charger), an empty bag for swag, and your creativity!</div>
        </div>
        <div class="module">
          <div class="title" onClick={() => {toggleState("three")}}>Who can attend?</div>
          <div class="answer" id="three">All female-identifying or non-binary college students (both undergraduates and graduates) are invited to attend, even with no prior experience necessary!</div>
        </div>
      <div class="module">
        <div class="title" onClick={() => {toggleState("four")}}>How much does it cost?</div>
        <div class="answer" id="four">GraceHacks will be absolutely FREE! We’ll provide food, swag, caffeine, WiFi, and a collaborative workspace to get your projects up and running quickly!</div>
      </div>
      <div class="module">
        <div class="title" onClick={() => {toggleState("five")}}>What can I create?</div>
        <div class="answer" id="five">Anything your heart desires! Hardware products, software applications, gaming interfaces ~ if you can dream it, you can build it!</div>
      </div>
      <div class="module">
        <div class="title" onClick={() => {toggleState("six")}}>What if I don’t have a team or idea?</div>
        <div class="answer" id="six">No worries! We’ll have a short activity at the beginning of the hackathon, where you can meet others who you might want to collaborate with :-)</div>
      </div>
      <div class="module">
        <div class="title" onClick={() => {toggleState("seven")}}>What if I don’t know how to code?</div>
        <div class="answer" id="seven">GraceHacks is a wonderful place to get your feet wet in software development! Not a technical major? Don’t worry ~ the best hackathon teams  delicately balance graphic designers, project managers, and business associates as well!</div>
      </div>
      <div class="module">
        <div class="title" onClick={() => {toggleState("eight")}}>What if I have another question?</div>
        <div class="answer" id="eight">Feel free to email us at <a href="mailto:ucsc.gracehacks@gmail.com" target=
        "_blank" rel="noopener noreferrer">ucsc.gracehacks@gmail.com</a> for any other questions that you may have!</div>
      </div>
    </div>
  </div>
  );
}

export default FAQ;