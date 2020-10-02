import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";

import { fetchCollectionsStart, shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
  ]); // all takes arrays of sagas and if we call yield individually it waits for first yield to complete but in all we can provide multiple sagas and they can run multiple at a time and it initializes it on different time streams
}
