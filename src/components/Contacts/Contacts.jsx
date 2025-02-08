import React from 'react';

import WhatsApp from '../../assets/img/whatsapp.svg';
import Telegram from '../../assets/img/telegram.svg';
import './Contacts.css';

export const Contacts = () => {
  const copyNumber = event => {
    /* Select the text field */
    const copyText = event.target.innerHTML;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    alert('Номер скопирован');
  };

  return (
    <div className="contacts">
      <div className="contacts__title">КОНТАКТЫ</div>
      <div className="contacts__content">
        <div className="contacts__content__item">
          <div className="content__item__image" data-aos="fade" data-aos-duration="1500">
            <img src="https://i.ibb.co/jPz12h6X/collage1.jpg" alt="man" />
          </div>
          <div className="content__item__title">
            <span>Роман</span>
          </div>
          <div className="content__item__desc"></div>
          <div className="content__item__contact">
            <span onClick={e => copyNumber(e)} className="contact__phone">
              +7 961 074 0519
            </span>
            <br />
            <br />
            <span className="contact__phone-desc">(нажмите на номер, чтобы скопировать)</span>
            <br />
            <br />
            <div className="socials">
              <a href="https://wa.clck.bar/79610740519" className="socials--button" target="norefferer">
                <img src={WhatsApp} alt="whats-app-icon" />
              </a>
              <a
                href="https://web.telegram.org/a/#5060268557"
                className="socials--button"
                target="norefferer">
                <img src={Telegram} alt="whats-app-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contacts__content__item">
          <div
            className="content__item__image"
            data-aos="fade"
            data-aos-duration="2500"
            data-aos-delay="200">
            <img src="https://i.ibb.co/jPz12h6X/collage1.jpg" alt="woman" />
          </div>
          <div className="content__item__title">
            <span>Дарья (+фото)</span>
          </div>
          <div className="content__item__desc"></div>
          <div className="content__item__contact">
            <span className="contact__phone" onClick={e => copyNumber(e)}>
              (номер Даши)
            </span>
            <br />
            <br />
            <span className="contact__phone-desc">(нажмите на номер, чтобы скопировать)</span>
            <br />
            <br />
            <div className="socials">
              <a href="#" className="socials--button" target="norefferer">
                <img src={WhatsApp} alt="whats-app-icon" />
              </a>
              <a href="#" className="socials--button" target="norefferer">
                <img src={Telegram} alt="whats-app-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts__warning">
        <span>Просьба, чтобы все прошло идеально, пожалуйста, заполните до 15.06.2025 анкету снизу ! </span>
      </div>
    </div>
  );
};
