import styled from "styled-components";
import Button from "antd/es/button";

export const Footer = styled.footer`
  padding: 18px 30px 15px 30px;
  min-height: 350px;
  border-top: 8px solid;
  font-family: "Racing Sans One", cursive !important;
  ${({ imgSrc }) =>
    imgSrc &&
    `
  background-image: url(${imgSrc}); 
  background-repeat: no-repeat; 
  background-size: 100%; 
  // background-color: #283566;
  background-color: transparent;
  `};
`;

export const ViewContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FooterSection = styled.section`
  min-width: 200px;
`;

export const SectionHead = styled.h3`
  margin-botom: 25px;
  font-size: 25px;
  line-height: 30px;
  font-weight: bolder;
  color: #fff;
`;

export const SectionList = styled.ul`
  list-style-type: ${({ noBullets }) => (noBullets ? "none" : "circle")};
  padding: 0;
  padding: 0 5px;
`;

export const SectionListItem = styled.li`
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  color: #d1d1d1;
  ${({ margintop }) => margintop && `margin-top: ${margintop}`};
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const StyledSpan = styled.span`
  margin-inline-start 12px;
`;

export const StyledButton = styled(Button)`
  margin-inline-end 12px;
  > i {
        font-size: 22px;
  }
`;

export const RightsText = styled.p`
  height: 25px;
  font-size: 15px;
  color: #d1d1d1;
  margin: 0px;
  font-size: 13px;
`;
