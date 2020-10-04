import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// To use our custom element we pass it as a function
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// Also for this we have to import css from styled-components
// const OptionsContainerStyles = css`  // css is used to make a variable so that we can use same style multiple times
//   padding: 10px 15px;
//   cursor: pointer;
// `;

// export const OptionDiv = styled.div`
//   ${OptionsContainerStyles}
// `;
