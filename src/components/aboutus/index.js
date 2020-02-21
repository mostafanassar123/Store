import React from "react";
import IconAbout from "../../assests/iconaboutus.png";

import {
  StoreName,
  WordAboutUs,
  IconImg,
  ParentImg,
  StyledPanel,
  StyledCollapse
} from "./styled.js";

function callback(key) {
  console.log(key);
}
export default () => {
  return (
    <div>
      <StoreName>Nassar</StoreName>
      <StoreName> Who We Are </StoreName>
      <WordAboutUs>
        Nassar is one of the largest purchasing megastores of independent
        retailers offering sports and casual shoes, classic shoes and bags and
        is represented by one store in zagazig in Egypt.
      </WordAboutUs>
      <WordAboutUs>
        Advice, know-how, and plenty of passion and excitement to offer its
        consumers variety of products from different renowned brands are our
        most decisive competitive advantages! In the future, we will continue to
        inspire our customers and support them in achieving their lifestyle
        goals!
      </WordAboutUs>
      <WordAboutUs>
        Assortment of leading brands and high quality private labels - CAT,
        Milano, Turbo, Adidas, Fila, yasser, group , Airwalk, Speedo, Aldo ,
        Germany , brothers , CATS , My Doll , Nike , Sunny, 3Top , Joop and bags
        are available exclusively from Nassar Store.
      </WordAboutUs>
      <ParentImg>
        <IconImg src={IconAbout} alt="IconAbout" />
      </ParentImg>
      <StyledCollapse defaultActiveKey={["1"]} onChange={callback}>
        <StyledPanel header="Mission" key="1">
          <p>
            To be the most eminent outlet that offers consumers variety of
            renowned brands in the field of casual apparels, footwear and bags.
          </p>
        </StyledPanel>
        <StyledPanel header="Vision" key="2">
          <p>
            We seek to help people achieve the lifestyle they want by offering
            them variety of products from different brands. We are consumer
            centric;we work on improving the products to provide the consumers
            with the highest value.
          </p>
        </StyledPanel>
        <StyledPanel header="Personally , Caring for our Customers" key="3">
          <p>
            Nassar store has a close relation to its geographical and social
            environment. It’s an integrated part of the town or neighborhood
            with manager and staff members rooted in the region. This genuine
            proximity is a distinctive attribute of Nassar for our customers it
            means the promise of individual and empathetic assistance at any
            time.
          </p>
        </StyledPanel>
      </StyledCollapse>
    </div>
  );
};
