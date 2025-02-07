import React from "react";

// import BG1 from "../../assets/img/8.jpg";
// import BG2 from "../../assets/img/9.jpg";
// import BG3 from "../../assets/img/10.jpg";
import "./GallerySecond.css";

export const GallerySecond = () => {
  return (
    <div className="gallery">
      <div className="gallery__main">
        <img
          src="https://i.ibb.co/yX3Mbv1/8.jpg"
          alt="first phot"
          className="gallery__photo-main"
        />
      </div>
      <div className="gallery__sub">
        <img
          src="https://i.ibb.co/ZzQxqwG/9.jpg"
          alt="second phot"
          className="gallery__photo-sub"
        />
        <img
          src="https://i.ibb.co/WGf0mzN/10.jpg"
          alt="third phot"
          className="gallery__photo-sub"
        />
      </div>
    </div>
  );
};
