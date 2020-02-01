import styled from "styled-components";

export const ProductsSlider = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
export const ProductTitle = styled.div`
  font-family: "Racing Sans One", cursive !important;
  font-size: 28px;
  font-weight: bolder;
  color: #bf1e2e;
  /* color: #f1e2e; */
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  margin-bottom: 20px;
  padding-top: 30px;
  margin-bottom: 30px;
`;
