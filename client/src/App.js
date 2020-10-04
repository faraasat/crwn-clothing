import React, { useEffect } from "react";
import { Switch, Route, Redirect /*Link*/ } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

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
      <Header />
      <Switch>
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