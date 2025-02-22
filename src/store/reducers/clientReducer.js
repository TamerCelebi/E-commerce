// Action Types
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

// Initial State
const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: 'light',
  language: 'tr'
};

// Reducer
export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
}

// Action Creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language
});

// Thunk Action Creators
export const fetchRoles = () => async (dispatch) => {
  try {
    const response = await fetch('https://workintech-fe-ecommerce.onrender.com/roles');
    const roles = await response.json();
    dispatch(setRoles(roles));
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};
