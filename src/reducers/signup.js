import { CHANGE_FIELD, SIGNUP_SUCCESS, SIGNUP_FAILED } from 'src/actions/signup';
import { USER_LOGOUT } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  first_name: '',
  last_name: '',
  phone_number: '',
  signupSuccess: false,
};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        email: '',
        password: '',
        passwordConfirm: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        signupSuccess: true,
        error: '',
      };
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        password: '',
        passwordConfirm: '',
        error: action.message,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        signupSuccess: false,
      };
    }
    default:
      return state;
  }
};

export default signup;