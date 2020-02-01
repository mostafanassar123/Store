import React from "react";
import Slider from "../../components/Slider";
import shoesImg from "../../assests/shoes.jpg";
import nature from "../../assests/nature.jpg";
import nature2 from "../../assests/nature2.jpg";
import nature3 from "../../assests/nature3.jpg";
import nature4 from "../../assests/nature4.jpg";

import {
  WebName,
  ImportantStatement,
  WelcomeSentence,
  PriceStatement,
  Button,
  SliderImage
} from "./styled.js";
import SletterButton from "../../components/SletterButton";
import ProductSlider from "../../components/ProductSlider";

export default () => (
  <div>
    <Slider>
      <SliderImage src={nature} />
      <SliderImage src={nature2} />
      <SliderImage src={nature3} />
      <SliderImage src={nature4} />
    </Slider>

    <WebName>Nassar</WebName>

    <ImportantStatement>
      YOUR ONLINE SHOP FOR ACTIVE LIFE SHOESES
    </ImportantStatement>

    <WelcomeSentence>
      We introduce lovesports , have a beauty shoes – and nice prices! Here at
      Nassar, we offer a huge choice of selected sportswear , Men's and women's
      medical shoes men's and women's classic shoes, men's and women's casual
      shoes and men's and women's slippers at suitable price. Starting with
      these elegant and comfortable shoes, which are identical to both formal
      and casual clothes And these products are from your favorite brands - we
      sell everything that makes you the best and makes you feel comfortable at
    </WelcomeSentence>

    <PriceStatement>
      low prices and in high quality by famous brands.
    </PriceStatement>

    <Button>
      <SletterButton> </SletterButton>
      <SletterButton color="#bf1e2e" name="best seller"></SletterButton>
    </Button>

    <ProductSlider
      images={[
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg
      ]}
    />

    <Slider>
      <SliderImage src={nature} />
      <SliderImage src={nature2} />
      <SliderImage src={nature3} />
      <SliderImage src={nature4} />
    </Slider>

    <ProductSlider
      images={[
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg
      ]}
      title="mens casual and classic shoes"
    />

    <ProductSlider
      images={[
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg
      ]}
      title="womens casual and classic shoes"
    />
    <ProductSlider
      images={[
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg
      ]}
      title="mens slipper "
    />
    <ProductSlider
      images={[
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg
      ]}
      title="womens slipper "
    />
    <ProductSlider
      images={[
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg
      ]}
      title="female bag "
    />
    <ProductSlider
      images={[
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg
      ]}
      title="kids shoes"
    />
    <ProductSlider
      images={[
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg,
        shoesImg
      ]}
      title="kids slipper"
    />
    <WebName>Welcome to NASSAR </WebName>

    <WelcomeSentence>
      NASSAR is one of the largest purchasing megastores of independent
      retailers offering classic shoes, casual shoes and sports shoes for men's
      , women's and kid's and bags and is represented by one store in zagazig in
      Egypt. Advice, know-how, and plenty of passion and excitement to offer its
      consumers variety of products from different renowned brands are our most
      decisive competitive advantages! In the future, we will continue to
      inspire our customers and support them in achieving their lifestyle goals!
    </WelcomeSentence>
  </div>
);
