import styled from "styled-components";
import theme from "../../../utils/theme";

export const SearchWrapper = styled.span`
  position: relative;
  min-width: 200px;
  height: 36px;
  line-height: 36px;
  border-radius: 6px;
  border: 1px solid #d1d1d1;
  display: block;
  color: #5f6368;
  ${({ isFocused }) =>
    isFocused &&
    `
  flex: 1;
  border: 1px solid ${theme.blue};
  background-color: #fff;
  transform: translate3d(0, 0, 0);
  transition: all 0.5s linear;
   outline: none;
  `};
`;

export const SearchInput = styled.input`
  border-radius: 0;
  border: 0;
  font: 400 13.3333px Arial;
  padding: 0px 6px;
  color: -internal - light - dark - color(black, white);
  font-size: 16px;
  background-color: -internal - light - dark - color(white, black);
  outline: 0;
  min-width: 100px;
  max-width: 87%;
  &:focus {
    outline: 0;
  }
  &:blur {
    flex: 0;
    transition: all 1s ease-in-out;
  }
`;

export const WrapperSearchIcon = styled.section`
  width: 31px;
  position: absolute;
  right: 0px;
  top: 0;
  bottom: 0;
  background-color: #d1d1d1;
  cursor: pointer;
  z-index: 100;
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  -webkit-transform: translate(33%, 33%);
  -ms-transform: translate(33%, 33%);
  transform: translate(51%, 7%);
`;

//   - webkit - writing - mode: horizontal-tb!important;
// text - rendering: auto;
// letter - spacing: normal;
// word - spacing: normal;
// text - transform: none;
// text - indent: 0px;
// text - shadow: none;
// text - align: start;
// -webkit - appearance: textfield;
// background - color: -internal - light - dark - color(white, black);
// -webkit - rtl - ordering: logical;
// cursor: text;
// margin: 0em;
// font: 400 13.3333px Arial;
// padding: 1px 0px;
// border - width: 2px;
// border - style: inset;
// border - color: initial;
// border - image: initial;
//      &: hover {
//   border - radius: 2px;
//   display: inline - block;
//   -webkit - box - flex: 0;
//   -ms - flex: 0 0 auto;
//   flex: 0 0 auto;
//
// }

// border: 0;
//
// height: 36px;
// outline: 0;
