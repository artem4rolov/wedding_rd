import React from 'react';
import './InfoBlock.css';

export const InfoBlock = () => {
  return (
    <div className="infoblock">
      <div className="infoblock__text_primary" data-aos="fade-down" data-aos-duration="1000">
        25.07.2025 <br />
        Состоится наша свадьба!
      </div>
      <div className="infoblock__text_secondary" data-aos="fade-down" data-aos-duration="1000">
        Будем очень рады провести этот праздник с самыми родными и близкими людьми!
      </div>
    </div>
  );
};
