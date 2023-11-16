import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <Link to="/movies" className="navigation__films">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__films">Сохранённые фильмы</Link>
        </>
    )
}

export default Navigation;