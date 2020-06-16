import React from 'preact/compat';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <nav>
      <NavLink activeClassName="menu-nav-active" to="/main/">Main</NavLink>
      <NavLink activeClassName="menu-nav-active" to="/card">Card</NavLink>
    </nav>
  );
}


export default Header;