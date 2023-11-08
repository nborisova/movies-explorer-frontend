import React from "react";
import { Link } from 'react-router-dom';

function NavTab() {
       return (
      <nav className="nav">
        <Link to="/profile" className="nav__link" href="#">О проекте</Link>
        <Link to="/signup" className="nav__link" href="#">Технологии</Link>
        <Link to="/signup" className="nav__link" href="#">Студент</Link>
      </nav>
    )
}

export default NavTab;