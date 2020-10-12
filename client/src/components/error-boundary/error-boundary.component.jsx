// Error Boundary is used with lazy and suspense because suspense cannot determine what to do when a error occurs
import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

class Errorboundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    //built in method
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={"https://i.imgur.com/yW2W9SC.png"} />
          <ErrorImageText>Sorry This Page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default Errorboundary;
