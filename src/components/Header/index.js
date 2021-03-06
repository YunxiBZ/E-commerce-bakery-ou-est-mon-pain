import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Connection from 'src/containers/Connection';

import './styles.scss';
import logo from 'src/assets/logo_grey.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggle, toggleNavbar }) => (
  <header className="header">
    <FontAwesomeIcon
      icon={faBars}
      className={toggle ? 'header__hamburger header__hamburger--active' : 'header__hamburger'}
      onClick={() => {
        // dispatch action changer l'état de toggle
        toggleNavbar();
      }}
    />
    <Link to="/">

      <img
        src={logo}
        alt="Logo"
        className="header__logo"
      />
    </Link>

    <Connection />

    {/* En gros on a un state 'toggle' qui passe de true à false au click sur le hamburger
        et on donne une classe en fonction de ce state */}
    <nav className={toggle ? 'header__navbar active' : 'header__navbar'}>
      <NavLink
        to="/"
        exact
        className="header__links"
        onClick={toggleNavbar}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/products"
        exact
        className="header__links"
        onClick={toggleNavbar}
      >
        Produits
      </NavLink>
      <NavLink
        to="/infos-pratiques"
        exact
        className="header__links"
        onClick={toggleNavbar}
      >
        Infos pratiques
      </NavLink>
      <NavLink
        to="/formulaire-de-contact"
        exact
        className="header__links"
        onClick={toggleNavbar}
      >
        Formulaire de contact
      </NavLink>
    </nav>

  </header>
);

Header.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default Header;
