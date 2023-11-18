import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__line"></div>
            <div className="footer__footnotes">
                <div className="footer__org">
                    <p className="footer__note">Яндекс.Практикум</p>
                    <p className="footer__note">Github</p>
                </div>
                <p className="footer__note">© 2023</p>
            </div>
        </footer>
    )
}

export default Footer;
