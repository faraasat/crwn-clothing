import React/*, { Profiler }*/ from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";
// import "./homepage.style.scss";

const HomePage = () => {
  return (
    // <Profiler /* This profiler is same as chrome extension react profiler as it tells component rendering time and count */
    //   id="Directory"
    //   onRender={(id, phase, actualDuration) => {
    //     console.log({ id, phase, actualDuration });
    //   }}
    // >
    <HomePageContainer>
      {/* Here we are using styled components */}
      <Directory />
    </HomePageContainer>
    // </Profiler>
  );
};

export default HomePage;
