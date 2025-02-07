import React from 'react';

// import BG from "../../assets/img/7.jpg";
import './Location.css';

export const Location = () => {
  return (
    <div className="location">
      <div className="location__text_primary" data-aos="fade-down" data-aos-duration="1000">
        Место проведения
        <br />
        Шатер это по любви
      </div>
      <div className="location__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Адрес: Волгоград, г. Краснослободск, п. Вторая Пятилетка, <br />
        турбаза "Дубовая роща"
      </div>
      <div className="location__button" data-aos="fade" data-aos-duration="2500">
        <a href="https://yandex.ru/maps/-/CHe~F864" target="norefferer">
          <button>Открыть карту</button>
        </a>
      </div>
    </div>
  );
};
