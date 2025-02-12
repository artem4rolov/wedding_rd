import React from 'react';
import './Colors.css';

// https://i.ibb.co/VcKFCxJq/photo-2025-02-04-11-40-53-2.jpg

export const Colors = () => {
  return (
    <div className="colors">
      <div className="colors__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Будем рады если вы поддержите цветовую гамму нашей свадьбы: Черный, белый, темно серый, светло серый!
      </div>
      <img
        src="https://i.ibb.co/pBq4KY61/colors.jpg"
        className="colors__cover"
        alt="colors cover"
        data-aos="fade-down"
        data-aos-duration="1000"
      />
    </div>
  );
};
