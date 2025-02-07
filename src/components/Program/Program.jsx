import React from "react";

// // import BG1 from "../../assets/img/5.jpg";
// import BG2 from "../../assets/img/6.jpg";
import "./Program.css";
import { BgWithGradient } from "../BgWithGradient/BgWithGradient";

export const Program = () => {
  return (
    <div className="program">
      <BgWithGradient
        background="https://i.ibb.co/rdzSWFj/5.jpg"
        gradient={"down"}
      />
      <div className="program__content">
        {/* заголовок и время */}
        <div
          className="content__title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          ПРОГРАММА СВАДЬБЫ
        </div>
        <div
          className="content__subtitle"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          23 сентября, суббота
        </div>
        {/* этапы по времени */}
        <div className="content__item" data-aos="fade" data-aos-duration="2000">
          <span className="content__item-time">16:00</span>
          <p className="content__item-title">Сбор гостей</p>
        </div>
        <div className="content__item" data-aos="fade" data-aos-duration="2000">
          <span className="content__item-time">16:30</span>
          <p className="content__item-title">Церемония Артема и Дарьи</p>
        </div>
        <div className="content__item" data-aos="fade" data-aos-duration="2000">
          <span className="content__item-time">17.30</span>
          <p className="content__item-title">Начало свадебного ужина</p>
        </div>
        <div className="content__item" data-aos="fade" data-aos-duration="2000">
          <span className="content__item-time">21.30</span>
          <p className="content__item-title">
            Финальное фото с последующим продолжением вечеринки
          </p>
        </div>
      </div>
      <BgWithGradient
        background="https://i.ibb.co/5691Gxv/6.jpg"
        gradient={"up"}
      />
    </div>
  );
};
