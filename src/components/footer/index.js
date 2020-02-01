import React from "react";
import Icon from "antd/es/icon";
import { BackTop } from "antd";

import {
  Footer,
  ViewContainer,
  FooterSection,
  SectionHead,
  SectionList,
  SectionListItem,
  StyledSpan,
  StyledButton,
  RightsText
} from "./indexStyled";

const imgSrc = "https://www.activaboualaa.com/media/wysiwyg/activfoo.png";

function Foter() {
  return (
    <Footer imgSrc={imgSrc}>
      <ViewContainer>
        <FooterSection>
          <SectionHead>My Account</SectionHead>

          <SectionList>
            <SectionListItem>My Personal Info </SectionListItem>
            <SectionListItem>My Orders</SectionListItem>
            <SectionListItem>My Addresses</SectionListItem>
            <SectionListItem>My Wishists</SectionListItem>
          </SectionList>
        </FooterSection>

        <FooterSection>
          <SectionHead>Sections</SectionHead>

          <SectionList>
            <SectionListItem>mens shoes </SectionListItem>
            <SectionListItem>mens slipper</SectionListItem>
            <SectionListItem>womens shoes</SectionListItem>
            <SectionListItem>womens slipper</SectionListItem>
            <SectionListItem>womens bag</SectionListItem>
            <SectionListItem>kids shoes</SectionListItem>
            <SectionListItem>kids slipper</SectionListItem>
          </SectionList>
        </FooterSection>

        <FooterSection>
          <SectionHead>Information</SectionHead>

          <SectionList>
            <SectionListItem>Contact us</SectionListItem>
            <SectionListItem>About us</SectionListItem>
            <SectionListItem>Store locator</SectionListItem>
            <SectionListItem>Size Chart</SectionListItem>
          </SectionList>
        </FooterSection>

        <FooterSection>
          <SectionHead>Contact Us</SectionHead>

          <SectionList noBullets>
            <SectionListItem>
              <Icon type="environment" />
              <StyledSpan>Egypt</StyledSpan>
            </SectionListItem>

            <SectionListItem>
              <Icon type="phone" />
              <StyledSpan>01024079888</StyledSpan>
            </SectionListItem>

            <SectionListItem>
              <Icon type="mail" />
              <StyledSpan>nasssarnassr@gmail.com</StyledSpan>
            </SectionListItem>

            <SectionListItem margintop="15px">
              <StyledButton icon="facebook" shape="circle" size="large" />
              <StyledButton icon="instagram" shape="circle" size="large" />
              <StyledButton icon="linkedin" shape="circle" size="large" />
            </SectionListItem>
          </SectionList>
        </FooterSection>
      </ViewContainer>

      <RightsText>Nassar© 2019. All Rights Reserved.</RightsText>
      <RightsText>Designed and Developed by Nassar Bro</RightsText>

      <BackTop />
    </Footer>
  );
}

/**
 *

      <Followers>
        <FollowerIcon>follow us :</FollowerIcon>
        <FollowerIcon>
          <Icon type="" />
        </FollowerIcon>
        <FollowerIcon>
          <Icon type="" />
        </FollowerIcon>
        <FollowerIcon>
          <Icon type="" />
        </FollowerIcon>
      </Followers>
 */
export default Foter;
