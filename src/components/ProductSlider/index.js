import React from "react";
import { ProductContainer, ProductTitle, ProductsSlider } from "./styled.js";
import ProductItem from "../Product";
import Slider from "../Slider";

function ProductSlider({ images = [], title }) {
  const data = groupData(images);
  return (
    <ProductsSlider>
      {title && <ProductTitle>{title}</ProductTitle>}

      <Slider noDots={true} autoPlayTime={4000} autoPlay={false}>
        {data.map((itemArr, idx) => {
          return (
            <ProductContainer
              key={idx}
              style={{ minHeight: "100%", minWidth: "100%" }}
            >
              {itemArr.map((imgItem, key) => (
                <ProductItem src={imgItem} key={key} />
              ))}
            </ProductContainer>
          );
        })}
      </Slider>
    </ProductsSlider>
  );
}

const groupData = data => {
  let finalData = [];
  for (let idData = 0; idData < data.length; idData += 4) {
    finalData = [...finalData, data.slice(idData, idData + 4)];
  }

  console.log("finalData", finalData);
  return finalData;
};

ProductSlider.defaultProps = {
  images: []
};
export default ProductSlider;
