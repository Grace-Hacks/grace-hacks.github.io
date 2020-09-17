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

      <div class="box">
        We are still looking for sponsors for GraceHacks 2020. Please reach out
        to us if you're interested in helping make this hackathon a success.
      </div>

      <div class="bg-button">SPONSOR GRACE HACKS TODAY!</div>

      <div class="sponsors-row">
        <img
          src={require("./images/CDKGlobal.svg")}
          class="x-large-logo"
          alt="CDKGlobal"
        />
        <img
          src={require("./images/Salesforce.svg")}
          class="x-large-logo"
          alt="Salesforce"
        />
        <img
          src={require("./images/Nutanix.svg")}
          class="x-large-logo"
          alt="Nutanix"
        />
        <img
          src={require("./images/CBT.svg")}
          class="CBT-logo"
          alt="CBTech"
        />
      </div>

      <div class="sponsors-row">
        <img
          src={require("./images/Linode.svg")}
          class="large-logo"
          alt="Linode"
        />
        <img
          src={require("./images/Balsamiq.svg")}
          class="large-logo"
          alt="Balsamiq"
        />
        <img
          src={require("./images/RStudio.svg")}
          class="large-logo"
          alt="RStudio"
        />
      </div>

      <div class="sponsors-row">
        <img
          src={require("./images/MouserElectronics.svg")}
          class="small-logo"
          alt="Mouser Electronics"
        />
        <img
          src={require("./images/Girls-Make-Games.svg")}
          class="small-logo"
          alt="Girls Make Games"
        />
        <img
          src={require("./images/Makey-Makey.svg")}
          class="small-logo"
          alt="Makey Makey"
        />
        <img
          src={require("./images/Desmos.svg")}
          class="small-logo"
          alt="Desmos"
        />
        <img
          src={require("./images/Heroku.svg")}
          class="small-logo"
          alt="Heroku"
        />
      </div>

      <div class="sponsors-row">
        <img
          src={require("./images/Sticker-Giant.svg")}
          class="small-logo"
          alt="Sticker Giant"
        />
        <img
          src={require("./images/Kingston.svg")}
          class="small-logo"
          alt="Kingston"
        />
        <img
          src={require("./images/Sentry.svg")}
          class="small-logo"
          alt="Sentry"
        />
        <img
          src={require("./images/HVMN.svg")}
          class="small-logo"
          alt="HVMN"
        />
        <img
          src={require("./images/CloudSploit.svg")}
          class="small-logo"
          alt="CloudSploit"
        />
      </div>

      <div class="sponsors-row">
        <img
          src={require("./images/AI-Camp.svg")}
          class="x-small-logo"
          alt="AI Camp"
        />
        <img
          src={require("./images/SCW.svg")}
          class="x-small-logo"
          alt="Santa Cruz Works"
        />
      </div>
    </div>
  );
}

export default Sponsors;
