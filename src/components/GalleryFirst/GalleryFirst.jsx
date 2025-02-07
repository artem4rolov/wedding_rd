import React from "react";

// import BG1 from "../../assets/img/2.jpg";
// import BG2 from "../../assets/img/3.jpg";
// import BG3 from "../../assets/img/4.jpg";
import "./GalleryFirst.css";

export const GalleryFirst = () => {
  return (
    <div className="gallery">
      <div className="gallery__sub">
        <img
          src="https://i.ibb.co/hgfLG8t/2.jpg"
          alt="second phot"
          className="gallery__photo-sub"
        />
        <img
          src="https://i.ibb.co/nsWfgWV/3.jpg"
          alt="third phot"
          className="gallery__photo-sub"
        />
      </div>
      <div className="gallery__main">
        <img
          src="https://i.ibb.co/5WvMdNN/4.jpg"
          alt="first phot"
          className="gallery__photo-main"
        />
      </div>
    </div>
  );
};
