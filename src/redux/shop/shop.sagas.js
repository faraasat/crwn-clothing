import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    ); // same as convertCollectionsSnapshotToMap(snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap)); // put is same as dispatch
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef.get().then(async (snapShot) => {  // Snapshot allows us to do live changes and it is an observable pattern
  // collectionRef
  //   .get()
  //   .then(async (snapShot) => {
  //     // This is a promise pattern
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
  //     console.log(collectionsMap);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //     // updateCollections(collectionsMap);
  //     // this.setState({ loading: false });
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  // function* is a generator function and in this yield gives value only when we call .next() on function's name and it returns an object with value and completed and completed remains false until all yields are been called by .next()
  // Since we put this function sagaMiddleware.run() in store where our all middlewares are placed It directly intercepts the action
  yield takeLatest(
    // if we are working on async code and click multiple times on one button it will cancel all previous request and display the latest but in case of takeEvery it displays all requests
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );

  // yield takeEvery // Take Every creates a non-blocking codes and it takes an action and fires an action and it regenerates the generator function
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
