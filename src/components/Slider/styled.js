import styled, { keyframes, css } from "styled-components";

export const SliderContainer = styled.div`
  height: 350px;
  margin: 0px auto;
  position: relative;
  z-index: 10;
  overflow: hidden;
`;

const slideKeyFrams = keyframes`
  from { transform: translateX(50%); opacity: 0 };
  to {  opacity: 1 };
`;

const animation = ({ show }) => css`
  ${show &&
    css`
      ${slideKeyFrams};
      display: block;
    `}
`;

export const ChildContainer = styled.div`
  height: 100%;
  width: 100%;
  display: none;
  animation-duration: 1s;
  animation-name: ${animation};
`;

export const ControllersWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0px;
  transform: translateY(132px);
`;

export const Controller = styled.img`
  width: 20px;
  height: 20px;
  border-raduis: 20px;
  padding: 10px;
  z-index: 100;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;

export const DotsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0px;
  z-index 100;
`;

export const Dot = styled.section`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #000;
  margin-inline-end: 5px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    width: 20px;
    border-radius: 12px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  `};
`;
