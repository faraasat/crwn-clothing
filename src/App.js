import React from "react";
import { Switch, Route, /*Link*/ } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

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

function App() {
  return (
    <div>
      <Switch>  {/* It says that as long as one route matches it renders it */}
        <Route exact path="/" component={HomePage} />  {/* exact means show this page if and only if the url is exactly / */}
        <Route exact path="/shop/hats" component={HatsPage} />
        {/* <Route exact path="/topic/:topicId" component={TopicDetail} />  : means that we can put here dynamic path */}
      </Switch>
    </div>
  );
}

export default App;
