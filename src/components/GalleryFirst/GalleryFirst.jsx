import React from 'react';

// import BG1 from "../../assets/img/2.jpg";
// import BG2 from "../../assets/img/3.jpg";
// import BG3 from "../../assets/img/4.jpg";
import './GalleryFirst.css';

export const GalleryFirst = () => {
  return (
    <div className="gallery">
      <div className="gallery__sub" data-aos="fade-down" data-aos-duration="1000">
        <img src="https://i.ibb.co/jPz12h6X/collage1.jpg" alt="second phot" className="gallery__photo-sub" />
        <img src="https://i.ibb.co/YwHBDTR/collage2.jpg" alt="third phot" className="gallery__photo-sub" />
      </div>
      <div className="gallery__main" data-aos="fade-down" data-aos-duration="1000">
        <img src="https://i.ibb.co/k2PqGNR7/collage3.jpg" alt="first phot" className="gallery__photo-main" />
      </div>
    </div>
  );
};
