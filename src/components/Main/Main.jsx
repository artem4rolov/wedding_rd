import React from "react";

// import BG from "../../assets/img/1.jpg";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="main__shadow" />
      <img
        src="https://i.ibb.co/njcW3CG/1.jpg"
        className="main__cover"
        alt="main cover"
        data-aos="fade"
        data-aos-duration="2000"
      />
      <div className="main__text">
        <div
          className="main__title"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="500"
        >
          АРТЕМ & ДАРЬЯ <br />
          23.09.2023
        </div>
        <div
          className="main__subtitle"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          приглашение на свадьбу
        </div>
      </div>
    </div>
  );
};
