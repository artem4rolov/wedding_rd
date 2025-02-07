import React from "react";
import "./InfoBlock.css";

export const InfoBlock = () => {
  return (
    <div className="infoblock">
      {/* текст */}
      <div
        className="infoblock__text"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        Дорогие родственники и друзья, мы с удовольствием приглашаем Вас на наш
        свадебный вечер!
        <br />
        На этом сайте Вы найдете всю необходимую подробную информацию о нашем
        событии, а также наши искренние пожелания для Вас.
        <br />
        <br />
        Мы будем счастливы разделить этот день с самыми близкими людьми, с
        нетерпением ждем на нашей свадьбе!
      </div>
    </div>
  );
};
