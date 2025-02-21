// Action Types
export const SET_CART = 'SET_CART';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_ADDRESS = 'SET_ADDRESS';

// Initial State
const initialState = {
  cart: [], // [{ count: 1, product: { id: "1235", ... } }]
  payment: null,
  address: null
};

// Reducer
export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    default:
      return state;
  }
}

// Action Creators
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address
});

// Helper Functions
export const addToCart = (product) => (dispatch, getState) => {
  const currentCart = [...getState().shoppingCart.cart];
  const existingItem = currentCart.find(item => item.product.id === product.id);

  if (existingItem) {
    existingItem.count += 1;
    dispatch(setCart([...currentCart]));
  } else {
    dispatch(setCart([...currentCart, { count: 1, product }]));
  }
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const currentCart = getState().shoppingCart.cart;
  const newCart = currentCart.filter(item => item.product.id !== productId);
  dispatch(setCart(newCart));
};
