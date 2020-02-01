import React from "react";
import Icon from "antd/es/icon";
import { StyledMeta, CardItem } from "./styled.js";

function ProductViewer({ src }) {
  return (
    <CardItem
      hoverable
      cover={<img alt="prod-img" src={src} />}
      actions={[
        <Icon type="heart" key="heart" />,
        <Icon type="shopping-cart" key="shopping-cart" />
      ]}
    >
      <StyledMeta title="Name" description="Shees" />
      <StyledMeta title="Price" description="200" />
    </CardItem>
  );
}
export default ProductViewer;
