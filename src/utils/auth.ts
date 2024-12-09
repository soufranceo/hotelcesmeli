import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const TOKEN_KEY = 'authToken';

export const setAuthCookie = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: 1, secure: true });
};

export const getAuthCookie = () => {
  return Cookies.get(TOKEN_KEY);
};

export const removeAuthCookie = () => {
  Cookies.remove(TOKEN_KEY);
};

export const isTokenValid = (token: string): boolean => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp ? decoded.exp > currentTime : false;
  } catch {
    return false;
  }
};