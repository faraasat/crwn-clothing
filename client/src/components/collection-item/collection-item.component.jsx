import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionFooter,
  CollectionFooterName,
  CollectionFooterPrice,
  CustomButtonStyling,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>{price}</CollectionFooterPrice>
      </CollectionFooter>
      <CustomButtonStyling>
        <CustomButton onClick={() => addItem(item)} inverted>
          Add To Cart
        </CustomButton>
      </CustomButtonStyling>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
