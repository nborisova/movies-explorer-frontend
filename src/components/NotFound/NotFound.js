import React from "react";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
      <main className="not-found">
        <div className="not-found__err">
          <h1 className="not-found__header">404</h1>
          <p className="not-found__text">Страница не найдена</p>
        </div>
        <Link className="not-found__link" to="/">Назад</Link>
      </main>
    )
}

export default NotFound;
