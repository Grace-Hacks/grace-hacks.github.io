import React from 'react';
import React from 'react';
import './Sponsors.css';

function Sponsors() {
  return (
    <div>Hi Maritza!</div>
    <div class="sponsors-container">
      <div class="sponsors-title">
        <div class="word">
          <div class="letter">S</div>
          <div class="letter">P</div>
          <div class="letter">O</div>
          <div class="letter">N</div>
          <div class="letter">S</div>
          <div class="letter">O</div>
          <div class="letter">R</div>
          <div class="letter">S</div>
        </div>
      </div>

      <div class="sponsors-row">
        <div class='box'>We are still looking for sponsors for GraceHacks 2020. 
        Please reach out to us if you're interested in helping make this hackathon a success.</div>   
      </div>

      <div class="sponsors-row">
        <div class='button'>SPONSOR GRACE HACKS TODAY!</div>   
      </div>

      <div class="sponsors-row">
        <div class="x-large-logo">
          <img src={require("./Nutanix.png")} alt="Nutanix"/>
          <img src={require("./CDKGlobal.jpg")} alt="CDKGlobal"/>
          <img src={require("./Salesforce.png")} alt="Salesforce"/>
          <img src={require("./CBTech.jpg")} alt="CBTech"/>
        </div>
      </div>

      <div class="sponsors-row">
        <div class="large-logo">
          <img src={require("./RStudio.png")} alt="RStudio"/>
          <img src={require("./balsamiq.png")} alt="Balsamiq"/>
          <img src={require("./Linode.png")} alt="Linode"/>
        </div>
        <div class="medium-logo">
          <img src={require("./Kingston.png")} alt="Kingston Technology"/>
        </div>
      </div>

      <div class="sponsors-row">
        <div class="small-logo">
          <img src={require("./desmos.png")} alt="Desmos"/>
          <img src={require("./GirlsMakeGames.png")} alt="Girls Make Games"/>
          <img src={require("./CloudSploit.png")} alt="CloudSploit"/>
          <img src={require("./Sentry.png")} alt="Sentry"/>
        </div>
      </div>

      <div class="sponsors-row">
        <div class="small-logo">
          <img src={require("./StickerGiant.png")} alt="Sticker Giant"/>
          <img src={require("./untitled.png")} alt="Mouser Electronics"/>
          <img src={require("./untitled.png")} alt="Heroku"/>
          <img src={require("./untitled.png")} alt="Makey Makey"/>
        </div>
      </div>

      <div class="sponsors-row">
        <div class="x-small-logo">
          <img src={require("./untitled.png")} alt="AI Camp"/>
          <img src={require("./untitled.png")} alt="Santa Cruz Works"/>
          <img src={require("./untitled.png")} alt="HVMN"/>
        </div>
      </div>

    </div>


  );
}

export default Sponsors;