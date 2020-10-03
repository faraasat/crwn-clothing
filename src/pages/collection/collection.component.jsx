import React /*, { useEffect }*/ from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import {
  CollectionContainer,
  CollectionItems,
  CollectionTitle,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  // useEffect(() => {
  //   return () => {  // It is a cleanup component and it is called when our component is unmounted
  //   }
  // })

  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitle className="title">{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
