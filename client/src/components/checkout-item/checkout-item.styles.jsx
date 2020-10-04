import styled, { css } from "styled-components";

const ElementsWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;

export const CheckoutItemName = styled.span`
  ${ElementsWidth}
`;

export const CheckoutItemPrice = styled.span`
  ${ElementsWidth}
`;

export const CheckoutItemQuantity = styled.span`
  ${ElementsWidth}
  display: flex;
`;

export const QuantityArrows = styled.span`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;
