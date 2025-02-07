import React from "react";

import WhatsApp from "../../assets/img/whatsapp.svg";
import Telegram from "../../assets/img/telegram.svg";
import "./Contacts.css";

export const Contacts = () => {
  const copyNumber = (event) => {
    /* Select the text field */
    const copyText = event.target.innerHTML;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    alert("Номер скопирован");
  };

  return (
    <div className="contacts">
      <div className="contacts__title">КОНТАКТЫ</div>
      <div className="contacts__content">
        <div className="contacts__content__item">
          <div
            className="content__item__image"
            data-aos="fade"
            data-aos-duration="1500"
          >
            <img src="https://i.ibb.co/0DQMtnv/IMG-0355.jpg" alt="man" />
          </div>
          <div className="content__item__title">
            <span>Артем</span>
          </div>
          <div className="content__item__desc"></div>
          <div className="content__item__contact">
            <span onClick={(e) => copyNumber(e)} className="contact__phone">
              +7(995)418-09-85
            </span>
            <br />
            <br />
            <span className="contact__phone-desc">
              (нажмите на номер, чтобы скопировать)
            </span>
            <br />
            <br />
            <div className="socials">
              <a
                href="https://wa.clck.bar/79954180985"
                className="socials--button"
                target="norefferer"
              >
                <img src={WhatsApp} alt="whats-app-icon" />
              </a>
              <a
                href="https://t.me/artem4rolov"
                className="socials--button"
                target="norefferer"
              >
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
            data-aos-delay="200"
          >
            <img src="https://i.ibb.co/0ffg1zh/IMG-8938-1.jpg" alt="woman" />
          </div>
          <div className="content__item__title">
            <span>Дарья</span>
          </div>
          <div className="content__item__desc"></div>
          <div className="content__item__contact">
            <span className="contact__phone" onClick={(e) => copyNumber(e)}>
              +7(988)492-50-24
            </span>
            <br />
            <br />
            <span className="contact__phone-desc">
              (нажмите на номер, чтобы скопировать)
            </span>
            <br />
            <br />
            <div className="socials">
              <a
                href="https://wa.clck.bar/79884925024"
                className="socials--button"
                target="norefferer"
              >
                <img src={WhatsApp} alt="whats-app-icon" />
              </a>
              <a
                href="https://t.me/+79884925024"
                className="socials--button"
                target="norefferer"
              >
                <img src={Telegram} alt="whats-app-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts__warning">
        <span>
          Просим дать ваш ответ о присутствии на мероприятии до 1 сентября
        </span>
      </div>
    </div>
  );
};
