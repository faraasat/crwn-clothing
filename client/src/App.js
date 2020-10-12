import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect /*Link*/ } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

// const HomePage = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <Link to='/topic'>Topics</Link>
//       <button onClick={() => props.history.push('/topic')}>Topics</button>
//       <h1>Home Page</h1>
//     </div>
//   );
// };

// const TopicList = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>Topic List Page</h1>
//     </div>
//   );
// };

// const TopicDetail = (props) => {
//   console.log(props)
//   console.log(props.match.params.topicId)
//   return (
//     <div>
//       <h1>Topic Detail Page</h1>
//     </div>
//   );
// };

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // componentDidMount() {
  //   checkUserSession();
  // }

  // componentWillUnmount() {
  //   /* componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in */
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* it is used with lazy so that in the time page is loading it could render something */}
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            {/* It says that as long as one route matches it renders first path which matches it and do  not look for any other matches, it also allows for nested routes to work properly */}
            <Route exact path="/" component={HomePage} />{" "}
            {/* exact means show this page if and only if the url is exactly / */}
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
        {/* <Route exact path="/topic/:topicId" component={TopicDetail} />  : means that we can put here dynamic path */}
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
