import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  MenuTitle,
  MenuContent,
  MenuSubTitle,
  MenuImage,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <MenuContent>
        <MenuTitle>{title.toUpperCase()}</MenuTitle>
        <MenuSubTitle>SHOP NOW</MenuSubTitle>
      </MenuContent>
    </MenuItemContainer>
  );
};

// This withRouter will return MenuItem with access to history and match props
export default withRouter(MenuItem);
