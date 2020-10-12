import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";
// import "./homepage.style.scss";

const HomePage = () => {
  return (
    <HomePageContainer>
      {/* Here we are using styled components */}
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
