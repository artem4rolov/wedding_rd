import { MapPin, AArrowDown, Glasses } from 'lucide-react';
import './Events.css';

const events = [
  { time: '15:00', text: 'Сбор гостей', icon: <MapPin size={24} /> },
  { time: '15:30', text: 'Выездная регистрация', icon: <AArrowDown size={24} /> },
  { time: '16:00', text: 'Банкет', icon: <Glasses size={24} /> },
];

export const Events = () => {
  return (
    <div className="event-container" data-aos="fade-down" data-aos-duration="1000">
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <span className="event-icon">{event.icon}</span>
            <span className="event-text">
              {event.time} {event.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
