import React from "react";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
      <section className="not-found">
        <div className="not-found__err">
          <h2 className="not-found__header">404</h2>
          <p className="not-found__text">Страница не найдена</p>
        </div>
        <Link className="not-found__link" to="/">Назад</Link>
      </section>
    )
}

export default NotFound;
