import { UserData } from './types';

export const setAuthDataToLoalStorage = (user: UserData): void => {
  localStorage.setItem('USER_NAME', user.username);
  localStorage.setItem('USER_TOKEN', user.token);
};

export const resetAuthDataToLoalStorage = (): void => {
  localStorage.removeItem('USER_NAME');
  localStorage.removeItem('USER_TOKEN');
};

export const getAuthDataToLoalStorage = (): UserData | undefined => {
  const username = localStorage.getItem('USER_NAME');
  const token = localStorage.getItem('USER_TOKEN');
  return {
    username,
    token,
  };
};
