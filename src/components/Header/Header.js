import React from "react";
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
      <header className={`header ${window.location.pathname === '/' ? ' header_color_dark' : ''}`}>
        <Navigation />
      </header>
    )
}

export default Header;
