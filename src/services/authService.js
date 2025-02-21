import api from '../api/axios';
import { setToken, removeToken } from '../utils/tokenUtils';

export const login = async (credentials, remember = false) => {
  try {
    const response = await api.post('/login', credentials);
    const { token, user } = response.data;
    setToken(token, remember);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async () => {
  try {
    const response = await api.get('/verify');
    return response.data;
  } catch (error) {
    removeToken();
    throw error;
  }
};

export const logout = () => {
  removeToken();
};
