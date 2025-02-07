import React from "react";

// import BG1 from "../../assets/img/12.jpg";
// import BG2 from "../../assets/img/13.jpg";
import "./DressCodeColors.css";

const DressCodeColors = () => {
  return (
    <div className="dresscode__colors">
      <div className="colors__block">
        <img
          src="https://i.ibb.co/kHt7yv3/12.jpg"
          alt="color img"
          className="colors__block-img"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        />
        <img
          src="https://i.ibb.co/jRZWybB/13.jpg"
          alt="color img"
          className="colors__block-img"
          data-aos="zoom-in-right"
          data-aos-duration="2500"
        />
      </div>
    </div>
  );
};

export default DressCodeColors;
