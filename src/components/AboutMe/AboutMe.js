import React from 'react';
import photo from '../../images/photo-student.png'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
        <h2 className="about-me__header">Студент</h2>
        <section className="about-me__info">
           <img className="about-me__photo" src={photo} alt="Фото студента"/>
           <div className="about-me__description">
                <h3 className="about-me__name">Виталий</h3>
                <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
                «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл
                с постоянной работы.</p>
                <a className="about-me__git" href="https://github.com/nborisova" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
           </div>
        </section>
        <Portfolio />
    </section>
  );
}

export default AboutMe;
