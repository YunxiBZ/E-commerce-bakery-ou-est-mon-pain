import { SIGNUP_SUCCESS } from 'src/actions/signup';

// IMPORT ACTIONS
import {
  CHANGE_VALUE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOGOUT,
  TOGGLE_FIRSTNAME,
  TOGGLE_LASTNAME,
  TOGGLE_PHONE,
  TOGGLE_EMAIL,
  CHANGE_INFO,
  MODIF__USER__SUCCESS,
} from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  infos: {
    firstName: '',
    lastName: '',
    logged: false,
    phoneNumber: 0,
    token: '',
  },
  action: {
    toggleFirstName: false,
    toggleLastName: false,
    togglePhone: false,
    toggleEmail: false,
  },
  newInfos: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  },
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        email: action.email,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        email: action.userData.email,
        password: '',
        infos: {
          ...action.userData,
        },
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        password: '',
        error: action.error,
      };
    }
    case USER_LOGOUT: {
      return {
        ...initialState,
      };
    }
    case TOGGLE_FIRSTNAME: {
      return {
        ...state,
        action: {
          ...state.action,
          toggleFirstName: !state.action.toggleFirstName,
          toggleLastName: false,
          togglePhone: false,
          toggleEmail: false,
        },
        newInfos: {
          ...state.newInfos,
          firstName: '',
        },
      };
    }
    case TOGGLE_LASTNAME: {
      return {
        ...state,
        action: {
          ...state.action,
          toggleLastName: !state.action.toggleLastName,
          toggleFirstName: false,
          togglePhone: false,
          toggleEmail: false,
        },
        newInfos: {
          ...state.newInfos,
          lastName: '',
        },
      };
    }
    case TOGGLE_PHONE: {
      return {
        ...state,
        action: {
          ...state.action,
          togglePhone: !state.action.togglePhone,
          toggleFirstName: false,
          toggleLastName: false,
          toggleEmail: false,
        },
        newInfos: {
          ...state.newInfos,
          phoneNumber: '',
        },
      };
    }
    case TOGGLE_EMAIL: {
      return {
        ...state,
        action: {
          ...state.action,
          toggleEmail: !state.action.toggleEmail,
          toggleFirstName: false,
          toggleLastName: false,
          togglePhone: false,
        },
        newInfos: {
          ...state.newInfos,
          email: '',
        },
      };
    }
    case CHANGE_INFO: {
      // console.log(action);
      return {
        ...state,
        newInfos: {
          ...state.newInfos,
          [action.fieldName]: action.value,
        },
      };
    }
    case MODIF__USER__SUCCESS: {
      // console.log(action);
      return {
        ...state,
        email: action.email,
        action: {
          toggleFirstName: false,
          toggleLastName: false,
          togglePhone: false,
          toggleEmail: false,
        },
        infos: {
          ...state.infos,
          firstName: action.firstName,
          lastName: action.lastName,
          phoneNumber: action.phoneNumber,
        },
      };
    }
    default:
      return state;
  }
};

export default user;
