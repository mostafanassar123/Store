import styled from "styled-components";

export default styled.button`
  color: white;
  background-color: #bf1e2e;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  height: 42px;
  padding: 0 18px;
  line-height: 42px;
  width: 148px;
  border: 0px;
  outline: none;
  border-radius: 3px;
  margin-bottom: 20px;
  margin-inline-end: 10px;
  text-transform: uppercase;
  cursor: pointer;
  ${({ color, name }) => {
    return `
     background-color:${color || "#283566"};
     
    `;
  }}
`;
