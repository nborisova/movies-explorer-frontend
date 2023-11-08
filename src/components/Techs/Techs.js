import React from 'react';

function Techs() {
  return (
    <section className="techs">
        <h2 className="techs__header">Технологии</h2>
        <div className="techs__line"></div>
        <div className="techs__description">
            <h3 className="techs__description-header">
                7 технологий
            </h3>
            <p className="techs__description-text">
                На курсе веб-разработки мы освоили технологии, которые применили <br></br>в дипломном проекте.
            </p>
        </div>
        <div className="techs__types">
            <div className="techs__type">HTML</div>
            <div className="techs__type">CSS</div>
            <div className="techs__type">JS</div>
            <div className="techs__type">React</div>
            <div className="techs__type">Git</div>
            <div className="techs__type">Express.js</div>
            <div className="techs__type">mongoDB</div>
        </div>
    </section>
  );
}

export default Techs;