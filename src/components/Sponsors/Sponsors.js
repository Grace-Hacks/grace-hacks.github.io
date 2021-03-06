import React from "react";
import "./Sponsors.scss";
import CDKGlobal from "../../assets/Sponsors/CDKGlobal.svg"
import Salesforce from "../../assets/Sponsors/Salesforce.svg"
import Nutanix from "../../assets/Sponsors/Nutanix.svg"
import CBT from "../../assets/Sponsors/CBT.svg"
import Linode from "../../assets/Sponsors/Linode.svg"
import Balsamiq from "../../assets/Sponsors/Balsamiq.svg"
import RStudio from "../../assets/Sponsors/RStudio.svg"
import MouserElectronics from "../../assets/Sponsors/MouserElectronics.svg"
import GirlsMakeGames from "../../assets/Sponsors/Girls-Make-Games.svg"
import MakeyMakey from "../../assets/Sponsors/Makey-Makey.svg"
import Desmos from "../../assets/Sponsors/Desmos.svg"
import Heroku from "../../assets/Sponsors/Heroku.svg"
import StickerGiant from "../../assets/Sponsors/Sticker-Giant.svg"
import Kingston from "../../assets/Sponsors/Kingston.svg"
import Sentry from "../../assets/Sponsors/Sentry.svg"
import HVMN from "../../assets/Sponsors/HVMN.svg"
import CloudSploit from "../../assets/Sponsors/CloudSploit.svg"
import AICamp from "../../assets/Sponsors/AI-Camp.svg"
import SCW from "../../assets/Sponsors/SCW.svg"
import { Markunread } from "@material-ui/icons";


function Sponsors() {
  return (
    <div class="sponsors-container" id="sponsors">
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
        Thank you to our sponsors for making GraceHacks 2020 a success!
      </div>

      <div class="sponsors-row">
        <img
          src={CDKGlobal}
          class="x-large-logo"
          alt="CDKGlobal"
        />
        <img
          src={Salesforce}
          class="x-large-logo"
          alt="Salesforce"
        />
        <img
          src={Nutanix}
          class="x-large-logo"
          alt="Nutanix"
        />
        <img src={CBT} class="CBT-logo" alt="CBTech" />
      </div>

      <div class="sponsors-row">
        <img
          src={Linode}
          class="large-logo"
          alt="Linode"
        />
        <img
          src={Balsamiq}
          class="large-logo"
          alt="Balsamiq"
        />
        <img
          src={RStudio}
          class="large-logo"
          alt="RStudio"
        />
      </div>

      <div class="sponsors-row">
        <img
          src={MouserElectronics}
          class="small-logo"
          alt="Mouser Electronics"
        />
        <img
          src={GirlsMakeGames}
          class="small-logo"
          alt="Girls Make Games"
        />
        <img
          src={MakeyMakey}
          class="small-logo"
          alt="Makey Makey"
        />
        <img
          src={Desmos}
          class="small-logo"
          alt="Desmos"
        />
        <img
          src={Heroku}
          class="small-logo"
          alt="Heroku"
        />
      </div>

      <div class="sponsors-row">
        <img
          src={StickerGiant}
          class="small-logo"
          alt="Sticker Giant"
        />
        <img
          src={Kingston}
          class="small-logo"
          alt="Kingston"
        />
        <img
          src={Sentry}
          class="small-logo"
          alt="Sentry"
        />
        <img 
          src={HVMN} 
          class="small-logo" 
          alt="HVMN" 
        />
        <img
          src={CloudSploit}
          class="small-logo"
          alt="CloudSploit"
        />
      </div>

      <div class="sponsors-row">
        <img
          src={AICamp}
          class="x-small-logo"
          alt="AI Camp"
        />
        <img
          src={SCW}
          class="x-small-logo"
          alt="Santa Cruz Works"
        />
      </div>
    </div>
  );
}

export default Sponsors;
