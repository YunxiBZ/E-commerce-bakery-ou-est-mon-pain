import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';

import Button from 'src/components/Button';
import LoginField from './LoginField';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  submitForm,
  error,
  isLogged,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };
  // hook useHistory for redirect
  const history = useHistory();
  setTimeout(() => {
    if (isLogged) {
      history.push('/');
    }
  }, 1000);
  // const ADMIN = 'admin';
  // const USER = 'user';

  // if (role === ADMIN) {
  //   return <Redirect to="/admin" />;
  // }
  // if (role === USER) {
  //   return <Redirect to="/account" />;
  // }

  return (
    <div className="container">
      <form autoComplete="off" className="loginForm" onSubmit={handleSubmit}>
        {error && (
          <div className="loginForm__error">{error}</div>
        )}
        <LoginField
          name="email"
          placeholder="email"
          type="email"
          value={email}
          onChange={changeField}
        />
        <LoginField
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={changeField}
        />
        <div className="loginForm__container">
          <NavLink
            to="/signup"
            exact
            className="loginForm__links"
          >
            Se créer un compte
          </NavLink>
          <NavLink
            to="?????" // à changer ofc
            exact
            className="loginForm__links"
          >
            Mot de passe oublié ?
          </NavLink>
          <Button value="Se connecter" className="loginForm__button" type="submit" />
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
  error: '',
};

export default LoginForm;
