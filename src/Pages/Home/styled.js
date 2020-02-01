import styled from "styled-components";

export const WebName = styled.span`
  font-family: "Racing Sans One", cursive !important;
  display: block;
  text-align: center;
  padding-top: 30px;
  font-size: 70px;
  font-weight: 1000;
  color: #283566;
  margin-bottom: 0px;
`;
export const ImportantStatement = styled.span`
  font-family: "Racing Sans One", cursive !important;
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  color: #c0333d;
`;

export const WelcomeSentence = styled.p`
  text-align: center;
  color: #666666;
  margin: 0 10px;
  font-weight: 450px;
`;
export const PriceStatement = styled.span`
  font-family: "Racing Sans One", cursive !important;
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  color: #666666;
`;
export const Button = styled.div`
  disply: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const SliderImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  width: 100%;
`;
