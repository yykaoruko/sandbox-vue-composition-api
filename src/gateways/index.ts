const API_URL = 'https://conduit.productionready.io/api';

type RegisterParams = {
  user: {
    username: string;
    email: string;
    password: string;
  };
};

export const register = (params: RegisterParams) => {
  const body = JSON.stringify(params);
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json;charset=UTF-8');

  return fetch(`${API_URL}/users`, {
    headers: requestHeaders,
    method: 'POST',
    body,
  });
};

export const getTags = () => fetch(`${API_URL}/tags`, {
  method: 'GET',
});
