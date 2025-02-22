import React from 'react';

// https://i.ibb.co/XrV4q6h2/main.jpg main photo
import './Main.css';

export const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <img
          src="https://i.ibb.co/Q7W7TQfW/main-min.jpg"
          className="main__cover"
          alt="main cover"
          data-aos="fade"
          data-aos-duration="2000"
        />
        <div className="main__title" data-aos="fade-up" data-aos-duration="1000">
          РОМАН & ДАРЬЯ
        </div>
      </div>
      <div className="main__text">
        <div className="main__subscribtion" data-aos="zoom-in" data-aos-duration="1000">
          Если в сердце живёт любовь ….
        </div>
        <div className="main__subtitle" data-aos="zoom-in" data-aos-duration="1000">
          Мы приглашаем Вас разделить с нами особенный день
        </div>
      </div>
    </div>
  );
};
