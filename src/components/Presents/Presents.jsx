import React from "react";

// import BG from "../../assets/img/14.jpg";
import "./Presents.css";

export const Presents = () => {
  return (
    <div className="presents">
      <div className="presents__image">
        <img
          src="https://i.ibb.co/RCYwcVH/IMG-0391.jpg"
          alt="presents img"
          className="presents__image-bg"
        />
      </div>
      <div className="presents__content">
        <p
          className="presents__content-text"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="0"
        >
          Дорогие родственники, друзья и коллеги, наше торжество носит
          современный европейский характер, при подготовке мероприятия мы
          полностью воздержались от классических традиций – на нем не будет
          выкупа, каравая, продажи торта и собираний на младенцев.
          <br />
          <br />
          Будьте спокойны, что Вас не ожидают дополнительные траты.
          <br />
          <br />
          Пожелания для гостей:
        </p>

        <span
          className="presents__content-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          ПОДАРКИ
        </span>
        <p
          className="presents__content-text"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          Не ломайте голову над подарками! Ваши конверты помогут осуществить
          наши желания.
        </p>
        <span
          className="presents__content-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          ПОЗДРАВЛЕНИЯ
        </span>
        <p
          className="presents__content-text"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          На нашем празднике не будет обязательных поздравлений в микрофон и
          публичного дарения подарков. Вы можете сказать все теплые слова нам
          лично. А если Вы захотите произнести тост – сообщите ведущему, и он
          обязательно даст Вам слово в формате свободного микрофона.
          <br />
          <br />
          Мы будем благодарны, если Вы воздержитесь от криков «Горько!» на
          празднике.
        </p>
        <span
          className="presents__content-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          ЦВЕТЫ
        </span>
        <p
          className="presents__content-text"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Очень просим Вас не дарить нам цветы и избавить себя от дополнительных
          расходов, так как мы не успеем насладиться их красотой до отъезда.
        </p>
      </div>
    </div>
  );
};
