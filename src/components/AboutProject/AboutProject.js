import React from 'react';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
        <h2 className="about-project__header">О проекте</h2>
        <div className="about-project__text-block">
            <h3 className="about-project__header-block">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление
             функциональности и финальные доработки.</p>
            <h3 className="about-project__header-block">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
             соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__colour-block">
            <div className="about-project__blue-block">
                <p className="about-project__week-1">1 неделя</p>
            </div>
            <div className="about-project__grey-block">
                <p className="about-project__week-4">4 недели</p>
            </div>
            <p className="about-project__web">Back-end</p>
            <p className="about-project__web">Front-end</p>
        </div>
    </section>
  );
}

export default AboutProject;
