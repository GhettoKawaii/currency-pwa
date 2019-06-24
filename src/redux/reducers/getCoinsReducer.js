import {
  GET_COINS_REQUEST,
  GET_COINS_SUCCESS,
  GET_COINS_FAILURE
} from "../actionTypes";

const initialState = {
  data: {},
  error: null,
  isLoading: true
};

const getCurrenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS_REQUEST:
      return { ...state, isLoading: true };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        error: null
      };
    case GET_COINS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default getCurrenciesReducer;
