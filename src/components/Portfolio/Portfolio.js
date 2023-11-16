import React from 'react';

function Portfolio() {
  return (
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
  );
}

export default Portfolio;