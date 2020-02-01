import styled from "styled-components";
import theme from "../../../utils/theme";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style-type: none;
  display: inline;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline-block;
  min-width: 30px;
  font: 700 14px/20px Google Sans, Noto Sans, Noto Sans JP, Noto Sans KR,
    Noto Naskh Arabic, Noto Sans Thai, Noto Sans Hebrew, Noto Sans Bengali,
    sans-serif;
`;

export const ListItemLink = styled(Link)`
  color: #5f6368;
  margin: 0 10px;
  &:hover {
    color: ${theme.blue};
    cursor: pointer;
    border-bottom: 2px solid;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }
  ${({ active }) =>
    active === "true" &&
    `
    cursor: pointer;
    color: ${theme.blue};
    text-decoration: underline;
    border-bottom: 2px solid;
    border-radius: 2px;         
  `};
`;
