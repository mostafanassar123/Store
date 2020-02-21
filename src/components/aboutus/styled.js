import styled from "styled-components";
import { Collapse } from "antd";
const { Panel } = Collapse;

export const StoreName = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #353535;
  font-size: 214.28%;
  margin: 10px 0 16px 0;
`;

export const WordAboutUs = styled.h5`
  text-align: center;
  color: #353535;
  font-size: 15px;
  line-height: 1.428571429;
  margin: 10px 0 10px 0;
  margin-bottom: 25px;
`;

export const ParentImg = styled.section`
  text-align: center;
  border-top: 1px solid black;
  margin: 0px 0px;
`;

export const IconImg = styled.img`
  background-color: #fff;
  margin: 7px 0;
  max-width: 75%;
`;

export const StyledCollapse = styled(Collapse)`
  margin-bottom: 35px;
`;
export const StyledPanel = styled(Panel)`
  font-weight: bold;
  text-transform: uppercase;
  .ant-collapse-header {
    &:focus {
      color: #1e88e5 !important;
    }
  }
`;
