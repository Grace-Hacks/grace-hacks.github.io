import React from 'react';
import './Gallery.scss';
import P1 from "../../../../assets/Gallery/gallery1.jpg";
import P2 from "../../../../assets/Gallery/gallery2.jpg";
import P3 from "../../../../assets/Gallery/gallery3.jpg";
import P4 from "../../../../assets/Gallery/gallery4.jpg";
import P5 from "../../../../assets/Gallery/gallery5.jpg";
import P6 from "../../../../assets/Gallery/gallery6.jpg";
import P7 from "../../../../assets/Gallery/gallery7.jpg";
import P8 from "../../../../assets/Gallery/gallery8.jpg";

let assets = [P1, P2, P3, P4, P5, P6, P7, P8];
function Gallery() {
  return (
    <div className="gallery-container" id="events">
      <div className="marquee">
        <div className="marquee--inner">
          <div className="spin">
          {assets.map((item, index) => { 
            return <img className="orb" key={index} src={item} alt="GraceHacks member" />
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;