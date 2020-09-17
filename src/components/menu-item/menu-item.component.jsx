import React from "react";
import { withRouter } from 'react-router-dom';
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">SHOP NOW</span>
      </div>
    </div>
  );
};

// This withRouter will return MenuItem with access to history and match props
export default withRouter(MenuItem);
