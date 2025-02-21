// Action Types
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';

// Initial State
const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,          // Sayfa başına 25 ürün
  offset: 0,          // Sayfalama için başlangıç noktası
  filter: '',         // Ürün filtreleme
  fetchState: 'NOT_FETCHED'  // API çağrısının durumu
};

// Reducer
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload
      };
    default:
      return state;
  }
}

// Action Creators
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state
});

// Thunk Action Creator - Ürünleri getir
export const fetchProducts = () => async (dispatch, getState) => {
  const { limit, offset, filter } = getState().product;
  
  dispatch(setFetchState('FETCHING'));
  
  try {
    const response = await fetch(
      `https://workintech-fe-ecommerce.onrender.com/products?limit=${limit}&offset=${offset}&filter=${filter}`
    );
    const data = await response.json();
    
    dispatch(setProductList(data.products));
    dispatch(setTotal(data.total));
    dispatch(setFetchState('FETCHED'));
  } catch (error) {
    console.error('Error fetching products:', error);
    dispatch(setFetchState('FAILED'));
  }
};
