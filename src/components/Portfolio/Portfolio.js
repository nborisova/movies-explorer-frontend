import React from 'react';

function Portfolio() {
  return (
    <section className="about-me__portfolio">
        <h3 className="about-me__portfolio-header">
            Портфолио
        </h3>
        <a className="about-me__links" href="https://github.com/nborisova/how-to-learn" target="_blank"
            rel="noopener noreferrer">
            Статичный сайт<span className="about-me__links-img"></span>
        </a>
        <a className="about-me__links" href="https://github.com/nborisova/russian-travel" target="_blank"
            rel="noopener noreferrer">
            Адаптивный сайт<span className="about-me__links-img"></span>
        </a>
        <a className="about-me__links" href="https://github.com/nborisova/react-mesto-api-full-gha" target="_blank"
            rel="noopener noreferrer">
            Одностраничное приложение<span className="about-me__links-img"></span>
        </a>
    </section>
  );
}

export default Portfolio;
