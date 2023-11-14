import React from 'react';
import photo from '../../images/photo-student.svg'

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
        <h2 className="about-me__header">Студент</h2>
        <div className="about-me__line"></div>
        <section className="about-me__info">
           <div className="about-me__description">
                <p className="about-me__name">Виталий</p>
                <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                <br></br>и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании 
                «СКБ Контур». После того, как прошёл курс по <br></br>веб-разработке, начал заниматься фриланс-заказами и ушёл 
                с постоянной работы.</p>
                <a className="about-me__git" href="https://github.com/nborisova" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
           </div>
           <img className="about-me__photo" src={photo} alt="Фото студента"/> 
        </section>
        <section className="about-me__portfolio">
            <h3 className="about-me__portfolio-header">
                Портфолио
            </h3>
            <div className="about-me__links-block">
                <a className="about-me__links" href="https://github.com/nborisova/how-to-learn" target="_blank" 
                rel="noopener noreferrer">
                Статичный сайт
                </a>
                <div className="about-me__links-img"></div>
            </div>
            <div className="about-me__portfilio-line"></div>
            <div className="about-me__links-block">
                <a className="about-me__links" href="https://github.com/nborisova/russian-travel" target="_blank" 
                rel="noopener noreferrer">
                    Адаптивный сайт
                </a>
                <div className="about-me__links-img"></div>
            </div>
            <div className="about-me__portfilio-line"></div>
            <div className="about-me__links-block">
                <a className="about-me__links" href="https://github.com/nborisova/react-mesto-api-full-gha" target="_blank" 
                rel="noopener noreferrer">
                    Одностраничное приложение
                </a>
                <div className="about-me__links-img"></div>
            </div>
        </section>
    </section>
  );
}

export default AboutMe;