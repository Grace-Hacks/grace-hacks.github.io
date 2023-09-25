import React from "react";
import "./Sponsors.scss";
import Tree from "../../../../assets/Tree2.svg"

/**
 * Old Sponsors
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
*/


function Sponsors() {
  return (
    <div className="sponsors-container" id="sponsors">

    <div className="sponsors-title">
      sponsors
    </div>

    <div className="box">
      Huge thank you to our sponsors for helping make GraceHacks 2022 a success!
    </div>
    
    <div className="sponsors-row">
      <a className="sponsor" href="https://rachelcarson.ucsc.edu/" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">UCSC RACHEL CARSON COLLEGE</div>
      </a>
      <a className="sponsor" href="https://alumni.ucsc.edu/about/council/index.html/" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">UCSC ALUMNI COUNCIL</div>
      </a>
      <a className="sponsor" href="https://oakes.ucsc.edu/" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">UCSC OAKES</div>
      </a>
      <a className="sponsor" href="https://collegenine.ucsc.edu" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">COLLEGE 9/JRL</div>
      </a>
      <a className="sponsor" href="https://kresge.ucsc.edu" target="_blank" rel="noopener noreferrer">
        <div className="x-large-text">KRESGE</div>
      </a>
    </div>
    <img className="tree2" src={Tree}/>
    </div >
  );
}

export default Sponsors;
