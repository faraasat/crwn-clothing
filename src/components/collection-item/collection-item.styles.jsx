import styled from "styled-components";

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CustomButtonStyling = styled.span`
  & > * {
    z-index: 10;
    width: 80%;
    opacity: 0.7;
    position: absolute;
    left: 10%;
    top: 255px;
    display: none;
  }
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${CollectionItemImage} {
      opacity: 0.8;
    }
    ${CustomButtonStyling} > * {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionFooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionFooterPrice = styled.span`
  width: 10%;
`;
