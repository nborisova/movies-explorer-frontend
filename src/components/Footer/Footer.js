import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__line"></div>
            <div className="footer__footnotes">
                <ul className="footer__org">
                  <li><a className="footer__note" href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">
                    Яндекс.Практикум
                  </a></li>
                  <li><a className="footer__note" href="https://github.com/nborisova" target="_blank" rel="noopener noreferrer">
                    Github
                  </a></li>
                </ul>
                <p className="footer__note">© 2023</p>
            </div>
        </footer>
    )
}

export default Footer;
