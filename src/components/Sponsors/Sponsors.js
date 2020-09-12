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

      <div class="sponsors-row">
        <img src={require("./images/CDKGlobal.svg")} class="icon x-large-logo" alt="CDKGlobal" />
        <img src={require("./images/Salesforce.svg")} class="icon x-large-logo" alt="Salesforce" />
        <img src={require("./images/Nutanix.svg")} class="icon x-large-logo" alt="Nutanix" />
        <img src={require("./images/CBT.svg")} class="icon x-large-logo" alt="CBTech" />
      </div>

      <div class="sponsors-row">
        <img src={require("./images/Linode.svg")} class="icon large-logo" alt="Linode" />
        <img src={require("./images/Balsamiq.svg")} class="icon large-logo" alt="Balsamiq" />
        <img src={require("./images/RStudio.svg")} class="icon large-logo" alt="RStudio" />
      </div>

      <div class="sponsors-row">
        <img src={require("./images/MouserElectronics.svg")} class="icon small-logo" alt="Mouser Electronics" />
        <img src={require("./images/Girls-Make-Games.svg")} class="icon small-logo" alt="Girls Make Games" />
        <img src={require("./images/Makey-Makey.svg")} class="icon small-logo" alt="Makey Makey" />
        <img src={require("./images/Desmos.svg")} class="icon small-logo" alt="Desmos" />
        <img src={require("./images/Heroku.svg")} class="icon small-logo" alt="Heroku" />
      </div>

      <div class="sponsors-row">
        <img src={require("./images/Sticker-Giant.svg")} class="icon small-logo" alt="Sticker Giant" />
        <img src={require("./images/Kingston.svg")} class="icon medium-logo" alt="Kingston" />
        <img src={require("./images/Sentry.svg")} class="icon small-logo" alt="Sentry" />
        <img src={require("./images/HVMN.svg")} class="icon small-logo" alt="HVMN" />
        <img src={require("./images/CloudSploit.svg")} class="icon small-logo" alt="CloudSploit" />
      </div>

      <div class="sponsor-row">
        <img src={require("./images/AI-Camp.svg")} class="icon x-small-logo" alt="AI Camp" />
        <img src={require("./images/SCW.svg")} class="icon x-small-logo" alt="Santa Cruz Works" />
      </div>
    </div>
  );
}

export default Sponsors;
