import React from "react";
import "./Sponsors.scss";
import Tree from "../../../../assets/Tree2.svg"
import NSI from "../../../../assets/Sponsors/NSI-logo.png"
import Cross from "../../../../assets/Sponsors/cross-logo-wide.png"


function Sponsors() {
  return (
    <div className="sponsors-container" id="sponsors">

    <div className="sponsors-title">
      sponsors
    </div>

    <div className='thank-you'>
      <div>thank you to the sponsors</div><div> of this year's 2023 hackathon!</div>
    </div>

    <div className="sponsors-row">
    <a className="sponsor" href="https://www.natural-selection.com/technology" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">
          <img className="sponsor-img" src={NSI}></img>
        </div>
      </a>
      <a className="sponsor" href="https://cross.ucsc.edu/" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">
          <img className="sponsor-img" src={Cross}></img>
        </div>
      </a>
      <a className="sponsor" href="https://rachelcarson.ucsc.edu/" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">RACHEL CARSON COLLEGE</div>
      </a>
      <a className="sponsor" href="https://cowell.ucsc.edu/" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">COWELL COLLEGE</div>
      </a>
      <a className="sponsor" href="https://stevenson.ucsc.edu/index.html" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">STEVENSON COLLEGE</div>
      </a>
    </div>
    <img className="tree2" src={Tree}/>
    </div >
  );
}

export default Sponsors;
