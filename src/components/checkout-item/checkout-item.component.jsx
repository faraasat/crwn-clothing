import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  ClearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  QuantityArrows,
  QuantityValue,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <QuantityArrows onClick={() => removeItem(cartItem)}>
          &#10094;
        </QuantityArrows>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrows onClick={() => addItem(cartItem)}>
          &#10095;
        </QuantityArrows>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
