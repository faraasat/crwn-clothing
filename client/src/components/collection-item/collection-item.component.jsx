import React from "react";
import { connect } from "react-redux";

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
      <CustomButtonStyling onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButtonStyling>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
