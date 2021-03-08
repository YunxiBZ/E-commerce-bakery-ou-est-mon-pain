export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const USER_LOGOUT = 'USER_LOGOUT';

export const loginFailed = (message) => ({
  type: LOGIN_FAILED,
  error: message,
});

export const loginSuccess = (
  email,
  firstName,
  lastName,
  logged,
  phoneNumber,
  token,
) => ({
  type: LOGIN_SUCCESS,
  email,
  firstName,
  lastName,
  logged,
  phoneNumber,
  token,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
