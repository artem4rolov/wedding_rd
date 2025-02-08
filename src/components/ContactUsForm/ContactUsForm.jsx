import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUsForm.css';

export const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    drinks: [],
    partnerName: '',
    song: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        drinks: checked ? [...prev.drinks, value] : prev.drinks.filter(drink => drink !== value),
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите ваше имя';
    if (!formData.attendance) newErrors.attendance = 'Выберите один из вариантов';
    if (formData.partnerName.trim() === '') newErrors.partnerName = 'Введите имя';
    if (formData.song.trim() === '') newErrors.song = 'Введите название трека';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .send('service_hhoqdl9', 'template_j23wnwo', formData, 'b-TOSEP45wjN8h3P2')
      .then(() => alert('Форма отправлена!'))
      .catch(err => console.error('Ошибка отправки', err));
  };

  return (
    <form className="wedding-form" onSubmit={handleSubmit}>
      <p>Ваше имя и фамилия</p>
      <input type="text" name="name" onChange={handleChange} className="big-input" placeholder="Ваше имя" />
      {errors.name && <span className="error">{errors.name}</span>}

      <p>Планируете ли Вы присутствовать на свадьбе?</p>
      <div className="radio-group column">
        <label>
          <input type="radio" name="attendance" value="yes" onChange={handleChange} /> Да, с удовольствием!
        </label>
        <label>
          <input type="radio" name="attendance" value="no" onChange={handleChange} /> К сожалению, не смогу
        </label>
      </div>
      {errors.attendance && <span className="error">{errors.attendance}</span>}

      <p>Уточните Ваши предпочтения в алкоголе, выбрав один или несколько вариантов:</p>
      <div className="checkbox-group column">
        {['Вино', 'Шампанское', 'Самогонка', 'Водка', 'Безалкогольные напитки'].map(drink => (
          <label key={drink}>
            <input type="checkbox" value={drink} onChange={handleChange} /> {drink}
          </label>
        ))}
      </div>

      <p>Имя и фамилия вашей второй половинки</p>
      <input
        type="text"
        name="partnerName"
        onChange={handleChange}
        className="big-input"
        placeholder="Иван Иванов"
      />
      {errors.partnerName && <span className="error">{errors.partnerName}</span>}

      <p>Напишите, пожалуйста, какой трек вы бы хотели услышать на нашей свадьбе</p>
      <input
        type="text"
        name="song"
        onChange={handleChange}
        className="big-input"
        placeholder="Мот - Свадебная"
      />
      {errors.song && <span className="error">{errors.song}</span>}

      <button type="submit">Отправить</button>
    </form>
  );
};
