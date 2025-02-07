import React from "react";

// import BG from "../../assets/img/7.jpg";
import "./Location.css";

export const Location = () => {
  return (
    <div className="location">
      <div
        className="location__image"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src="https://i.ibb.co/d0zYhpc/IMG-0389.jpg"
          alt="location img"
          className="location__image-bg"
        />
      </div>
      <div
        className="location__content"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <span className="location__content-title">МЕСТО</span>
        <span className="location__content-subtitle">The ШАТЕР</span>
        <p className="location__content-text">
          Место проведения – белоснежная шатровая площадка на территории
          Стрелкового комплекса «Профессионал».
          <br />
          <br />
          Адрес: Волгоградская область, город Волгоград, улица им. Землячки, дом
          92.
          <br />
          <br />
          При въезде на территорию комплекса необходимо сказать, что Вы гости
          свадьбы, которая проводится в шатре.
        </p>
      </div>
      <div
        className="location__button"
        data-aos="fade"
        data-aos-duration="2500"
      >
        <a href="https://yandex.ru/maps/-/CPH4jms" target="norefferer">
          <button>Открыть карту</button>
        </a>
      </div>
    </div>
  );
};
