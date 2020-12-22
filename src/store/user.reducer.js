import { AUTH_DONE, AUTH_FAILED } from './constants/user.constans.js';

const initialState = {
  userName: 'admin',
  password: '12345',
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_DONE:
      return {
        ...state,
        isLoggedIn: true,
      };

    case AUTH_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
