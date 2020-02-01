import React from "react";
import {
  SearchInput,
  SearchIcon,
  SearchWrapper,
  WrapperSearchIcon
} from "./styled";
import svgicon from "../../../assests/search.svg";

function Search({ onFocus, onBlur, focused }) {
  return (
    <SearchWrapper isFocused={focused}>
      <SearchInput
        onFocus={onFocus}
        onBlur={onBlur}
        type="text"
        placeholder="search products"
      />

      <WrapperSearchIcon>
        <SearchIcon src={svgicon} alt="sarch icon" />
      </WrapperSearchIcon>
    </SearchWrapper>
  );
}
export default Search;
