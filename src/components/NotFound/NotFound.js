import React from "react";
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <div className="not-found__err">
        <h1 className="not-found__header">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button onClick={() => navigate(-1)} className="not-found__link">Назад</button>
    </main>
  );
}

export default NotFound;
