import React from "react";
import { CartItemContainer, ItemDetails, ItemName } from "./cart-item.styled";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="ítem" />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);  // React.memo() is used for memorizing the component and it do not allow rendering the component until the value is changed
