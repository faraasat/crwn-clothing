import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionsPageContainer from "../../pages/collection/collection.container";

const ShopPage = (fetchCollectionsStart, match) => {
  // componentDidMount() {
  //   fetchCollectionsStart();
  // }

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]); // Anything we pass in this array means that only render useEffect when anything in array is rerendered or changed if we donot pass array it will render infinitely and if we pass empty array it will act as componentWillUnmount

  // Since we have used route in app.js so it passes the match from there and match provide current path. It also passes location and history
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionLoaded: selectIsCollectionLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
