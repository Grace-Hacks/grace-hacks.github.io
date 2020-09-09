import React from "react";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div class="sponsors-container">
      <div class="sponsors-title">
        <div class="letter">S</div>
        <div class="letter">P</div>
        <div class="letter">O</div>
        <div class="letter">N</div>
        <div class="letter">S</div>
        <div class="letter">O</div>
        <div class="letter">R</div>
        <div class="letter">S</div>
      </div>

      <div class="box">We are still looking for sponsors for GraceHacks 2020. Please reach out to us if you're 
      interested in helping make this hackathon a success.</div>

      <div class="bg-button">SPONSOR GRACE HACKS TODAY!</div>
      <div class="bg-button">
          <div class="sponsors-row">
            <div class="x-large-logo">
              <img src={require("./images/Nutanix.png")} class="icon" alt="Nutanix" />
              <img src={require("./images/CDKGlobal.jpg")} class="icon" alt="CDKGlobal" />
              <img src={require("./images/Salesforce.png")} class="icon" alt="Salesforce" />
              <img src={require("./images/CBTech.jpg")} class="icon" alt="CBTech" />
            </div>
          </div>

          <div class="sponsors-row">
            <div class="large-logo">
              <img src={require("./images/RStudio.png")} class="icon" alt="RStudio" />
              <img src={require("./images/balsamiq.png")} class="icon" alt="Balsamiq" />
              <img src={require("./images/Linode.png")} class="icon" alt="Linode" />
            </div>
            <div class="medium-logo">
              <img src={require("./images/Kingston.png")} class="icon" alt="Kingston Technology"/>
            </div>
          </div>

          <div class="sponsors-row">
            <div class="small-logo">
              <img src={require("./images/desmos.png")} class="icon" alt="Desmos" />
              <img src={require("./images/CloudSploit.png")} class="icon" alt="CloudSploit" />
              <img src={require("./images/GirlsMakeGames.png")} class="icon" alt="Girls Make Games" />
              <img src={require("./images/Sentry.png")} class="icon" alt="Sentry" />
            </div>
          </div>

          <div class="sponsors-row">
            <div class="small-logo">
              <img src={require("./images/StickerGiant.png")} class="icon" alt="Sticker Giant" />
              <img src={require("./images/MouserElectronics.webp")} class="icon" alt="Mouser Electronics" />
              <img src={require("./images/Heroku.jpeg")} class="icon" alt="Heroku" />
              <img src={require("./images/MakeyMakey.png")} class="icon" alt="Makey Makey" />
            </div>
          </div>

          <div class="sponsors-row">
            <div class="x-small-logo">
              <img src={require("./images/SCWorks.jpg")} class="icon" alt="Santa Cruz Works" />
              <img src={require("./images/AICamp.png")} class="icon" alt="AI Camp" />
              <img src={require("./images/HVMN.png")} class="icon" alt="HVMN" />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Sponsors;
