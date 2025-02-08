import React from 'react';

// import BG from "../../assets/img/7.jpg";
import './Attention.css';

export const Attention = () => {
  return (
    <div className="attention">
      <div className="attention__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        На нашей свадьбе планируется очень активная и взрослая развлекательная программа.
      </div>
      <div className="attention__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Поэтому просим вас оставить деток в надежных руках на этот вечер!
      </div>
      <div className="attention__text_primary" data-aos="fade-down" data-aos-duration="1000">
        Пожелания:
      </div>
      <div className="attention__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Свои теплые слова и пожелания приносите в сердцах, а подарки - в конверте!{' '}
      </div>
    </div>
  );
};
