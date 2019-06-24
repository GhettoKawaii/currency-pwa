import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import { GET_COINS_TRIGGERED } from "../actionTypes";
import {
  getCoinsRequest as request,
  getCoinsSuccess as success,
  getCoinsFailure as failure
} from "../actions/getCurrencies";

function* getCoins(action) {
  yield put(request());
  try {
    let response = yield call(
      [axios, axios.get],
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,UAH,RUB&api_key={51a525e101f07b11947573a072d5a1ccf157d7b6cad4d1b2d2630e6acb1c8f29}"
    );
    yield put(success(response.data));
  } catch (err) {
    console.log(err);
    yield put(failure(err.response));
  }
}

export default function* getCoinsSaga() {
  yield takeLatest(GET_COINS_TRIGGERED, getCoins);
}
