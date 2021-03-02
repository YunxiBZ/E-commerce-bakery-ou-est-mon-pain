import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';
import logo from 'src/assets/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggle, toggleNavbar }) => (
  <div className="header">
    <FontAwesomeIcon
      icon={faBars}
      className="header__hamburger"
      onClick={() => {
        // dispatch action changer l'état de toggle
        console.log(toggle);
        toggleNavbar();
      }}
    />
    <img
      src={logo}
      alt="Logo"
      className="header__logo"
    />
    {/* En gros on a un state 'active' qui passe de true à false au click sur le hamburger
        et on donne une classe en fonction de ce state */}
    <nav className={toggle ? 'header__navbar active' : 'header__navbar'}>
      <NavLink
        to="accueil"
        exact
        className="header__links"
      >
        Accueil
      </NavLink>
      <NavLink
        to="products"
        exact
        className="header__links"
      >
        Products
      </NavLink>
      <NavLink
        to="infos-pratiques"
        exact
        className="header__links"
      >
        Infos pratiques
      </NavLink>
      <NavLink
        to="Formulaire-de-contact"
        exact
        className="header__links"
      >
        Formulaire de contact
      </NavLink>
    </nav>
  </div>
);

Header.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default Header;
