import { AUTH_DONE, AUTH_FAILED } from './constants/user.constans';

export const logIn = () => ({
  type: AUTH_DONE,
});

export const logOut = () => ({
  type: AUTH_FAILED,
});

