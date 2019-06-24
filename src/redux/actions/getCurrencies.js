import {
  GET_COINS_TRIGGERED,
  GET_COINS_REQUEST,
  GET_COINS_SUCCESS,
  GET_COINS_FAILURE
} from "../actionTypes";

export const getCoinsTriggered = () => ({
  type: GET_COINS_TRIGGERED
});

export const getCoinsRequest = () => ({
  type: GET_COINS_REQUEST
});

export const getCoinsSuccess = data => ({
  type: GET_COINS_SUCCESS,
  payload: { data }
});

export const getCoinsFailure = error => ({
  type: GET_COINS_FAILURE,
  payload: { error }
});
