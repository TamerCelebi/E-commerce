import axios from '../../api/axios';

// Action Types
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

// Action Creators
export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  
  try {
    const response = await axios.post('/login', {
      email: credentials.email,
      password: credentials.password
    });

    const userData = {
      ...response.data.user,
      token: response.data.token,
      avatarUrl: credentials.avatarUrl
    };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userData
    });

    return { success: true, token: response.data.token };
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.response?.data?.message || 'Login failed'
    });
    throw error;
  }
};

export const logoutUser = () => ({
  type: USER_LOGOUT
});
