import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsStartAsync = (collectionsMap) => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    // collectionRef.get().then(async (snapShot) => {  // Snapshot allows us to do live changes and it is an observable pattern
    collectionRef
      .get()
      .then(async (snapShot) => {
        // This is a promise pattern
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        console.log(collectionsMap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        // updateCollections(collectionsMap);
        // this.setState({ loading: false });
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };

  // To do same as we are doing with on snapshot or get() with fetch
  // fetch(
  //   "https://firestore.googleapis.com/v1/projects/crwm-db-c2477/databases/(default)/documents/collections"
  // )
  //   .then((response) => response.json())
  //   .then((collection) => console.log(collection));
};
