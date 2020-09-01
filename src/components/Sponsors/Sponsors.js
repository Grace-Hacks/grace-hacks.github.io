import React from "react";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div class="sponsors-container">
      <div class="sponsors-title">
        <div class="word">
          <div class="letter">S</div>
          <div class="letter">P</div>
          <div class="letter">O</div>
          <div class="letter">N</div>
        </div>
        <div class="word">
          <div class="letter">S</div>
          <div class="letter">O</div>
          <div class="letter">R</div>
          <div class="letter">S</div>
        </div>
      </div>

      <div class="sponsors-row">
        <div class="box">
          We are still looking for sponsors for GraceHacks 2020. Please reach
          out to us if you're interested in helping make this hackathon a
          success.
        </div>
      </div>

      <div class="sponsors-row">
        <div class="button">SPONSOR GRACE HACKS TODAY!</div>
      </div>

      <div class="sponsors-row">
        <div class="x-large-logo">
          <img src={require("./images/Nutanix.png")} alt="Nutanix" />
          <img src={require("./images/CDKGlobal.jpg")} alt="CDKGlobal" />
          <img src={require("./images/Salesforce.png")} alt="Salesforce" />
          <img src={require("./images/CBTech.jpg")} alt="CBTech" />
        </div>
      </div>

      <div class="sponsors-row">
        <div class="large-logo">
          <img src={require("./images/RStudio.png")} alt="RStudio" />
          <img src={require("./images/balsamiq.png")} alt="Balsamiq" />
          <img src={require("./images/Linode.png")} alt="Linode" />
        </div>
        <div class="medium-logo">
          <img
            src={require("./images/Kingston.png")}
            alt="Kingston Technology"
          />
        </div>
      </div>

      <div class="sponsors-row">
        <div class="small-logo">
          <img src={require("./images/desmos.png")} alt="Desmos" />
          <img src={require("./images/CloudSploit.png")} alt="CloudSploit" />
          <img
            src={require("./images/GirlsMakeGames.png")}
            alt="Girls Make Games"
          />
          <img src={require("./images/Sentry.png")} alt="Sentry" />
        </div>
      </div>

      <div class="sponsors-row">
        <div class="small-logo">
          <img src={require("./images/StickerGiant.png")} alt="Sticker Giant" />
          <img
            src={require("./images/MouserElectronics.webp")}
            alt="Mouser Electronics"
          />
          <img src={require("./images/Heroku.jpeg")} alt="Heroku" />
          <img src={require("./images/MakeyMakey.png")} alt="Makey Makey" />
        </div>
      </div>

      <div class="sponsors-row">
        <div class="x-small-logo">
          <img src={require("./images/SCWorks.jpg")} alt="Santa Cruz Works" />
          <img src={require("./images/AICamp.png")} alt="AI Camp" />
          <img src={require("./images/HVMN.png")} alt="HVMN" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
