import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <div class="faq-section">
      <div class="row">
        <div class="module">
          <div class="title">What is a hackathon?</div>
          <div class="answer">A hackathon is a place where you can collaborate with others and express your creativity to create a product that solves some real-world problem. At GraceHacks, students of all different backgrounds and experiences will gather together to develop an idea and realize that solution all within the span of 12 hours!</div>
        </div>
        <div class="module">
          <div class="title">What should I bring?</div>
          <div class="answer">Be sure to bring an ID, a laptop (with charger), an empty bag for swag, and your creativity!</div>
        </div>
      </div>
      <div class="row">
        <div class="module">
          <div class="title">Who can attend?</div>
          <div class="answer">All female-identifying or non-binary college students (both undergraduates and graduates) are invited to attend, even with no prior experience necessary!</div>
        </div>
        <div class="module">
          <div class="title">How much does it cost?</div>
          <div class="answer">GraceHacks will be absolutely FREE! We’ll provide food, swag, caffeine, WiFi, and a collaborative workspace to get your projects up and running quickly!</div>
        </div>
      </div>
      <div class="row">
        <div class="module">
          <div class="title">What can I create?</div>
          <div class="answer">Anything your heart desires! Hardware products, software applications, gaming interfaces ~ if you can dream it, you can build it!</div>
        </div>
        <div class="module">
          <div class="title">What if I don’t have a team or idea?</div>
          <div class="answer">No worries! We’ll have a short activity at the beginning of the hackathon, where you can meet others who you might want to collaborate with :-)</div>
        </div>
      </div>
      <div class="row">
        <div class="module">
          <div class="title">What if I don’t know how to code?</div>
          <div class="answer">GraceHacks is a wonderful place to get your feet wet in software development! Not a technical major? Don’t worry ~ the best hackathon teams  delicately balance graphic designers, project managers, and business associates as well!</div>
        </div>
        <div class="module">
          <div class="title">What if I have another question?</div>
          <div class="answer">Feel free to email us at <a href="mailto:ucsc.gracehacks@gmail.com" target=
          "_blank" rel="noopener noreferrer">ucsc.gracehacks@gmail.com</a> for any other questions that you may have!</div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;