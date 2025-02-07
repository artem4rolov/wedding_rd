import React from "react";

// import BG from "../../assets/img/1.jpg";
import "./DressCode.css";

export const DressCode = () => {
  return (
    <div className="dresscode">
      <div className="dresscode__bg">
        <div className="dresscode__modal">
          <div className="modal__content">
            <span
              className="modal__title"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              ДРЕСС-КОД
            </span>
            <p className="modal__text" data-aos="fade" data-aos-duration="2000">
              Мы очень старались, чтобы наше событие стало красивым и стильным
              праздником, и будем очень благодарны, если в своих нарядах Вы
              поддержите цветовую гамму нашей свадьбы. Ниже мы прикрепляем для
              Вас палитру дресс-кода, Вы можете выбрать для себя как моно-образ,
              так и образ в сочетании нескольких оттенков по Вашим
              предпочтениям.
              <br />
              <br />
              Для мужчин допустим классический черный костюм с белой
              рубашкой/футболкой.
              <br />
              <br />
              Дорогие гости, убедительно просим Вас избегать ярких цветов в
              Ваших образах.
            </p>
          </div>
        </div>
        <img
          src="https://i.ibb.co/njcW3CG/1.jpg"
          alt=""
          data-aos="fade"
          data-aos-duration="3000"
        />
      </div>
    </div>
  );
};
