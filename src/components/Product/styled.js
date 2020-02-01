import styled, { css, keyframes } from "styled-components";
import Card from "antd/es/card";
import CartMeta from "antd/es/card/Meta";

export const CardItem = styled(Card)`
  > .ant-card-body {
    padding: 0px 8px;
    zoom: 1;
  }
  margin-inline-end: 20px;
  width: 260px;
`;

export const StyledMeta = styled(CartMeta)`
  > .ant-card-meta-detail {
    width: 100%;
    display: flex;

    justify-content: space-between;
  }
`;

const slideout = keyframes`
  from { transform: translateX(47%); opacity: 0; };
  to { opacity: 1; };
`;

export const ImgContainer = styled.div`
  height: 278px;
  background-color: white;
  display: inline-block;
  position: relative;
  margin: 0;
  border: 1px solid #d1d1d1;
  width: 280px;
  tex-align: center;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-inline-end: 20px;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 2px solid #f00;
    > section {
      animation: ${css`
        ${slideout} 0.5s ease-in-out;
      `};
      display: flex;
    }
  }
`;

export const ProductImg = styled.img`
  width: 260px;
  height: 260px;
`;

export const ProductPrice = styled.span`
  max-width: 260;
  display: inline-block;

  margin-bottom: 30px;
  text-transform: uppercase;
  border: 1px solid black;
`;

export const Purchase = styled.section`
  display: none;
  width: 100px;
  height: 35px;
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  line-height: 50px;
  background-color: #262626;
  border-radius: 5px;
  position: absolute;
  z-index: 200;
  bottom: 0;
`;

export const PurchaseImgItem = styled.img`
  height: 30px;
  width: 30px;
  &:last-child {
    margin-inline-start: 12px;
  }
`;
