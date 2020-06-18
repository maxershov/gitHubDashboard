import React from 'preact/compat';
import { Link } from 'react-router-dom';
import githubLogo from '../assets/github.svg';

import "./Header.css";

const Header = () => {

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/main" className="header__link">
          <img className="header__logo" alt="githubLogo" src={githubLogo} />
        </Link>
        <h1 className="header__text">GitHub Dashboard</h1>
      </div>
    </header>
  );
}


export default Header;