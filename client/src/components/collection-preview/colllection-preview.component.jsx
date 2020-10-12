import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewContainer, CollectionPreviewTitle, CollectionItemPreview} from './collection-preview.style'

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionItemPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionItemPreview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
