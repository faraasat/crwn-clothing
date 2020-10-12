import React, { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collection-overview.container")
);
const CollectionsPageContainer = lazy(() =>
  import("../../pages/collection/collection.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  // componentDidMount() {
  //   fetchCollectionsStart();
  // }

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  // Anything we pass in this array means that only render useEffect when anything in array is rerendered or changed if we donot pass array it will render infinitely and if we pass empty array it will act as componentWillUnmount

  // Since we have used route in app.js so it passes the match from there and match provide current path. It also passes location and history
  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
