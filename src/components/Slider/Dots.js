import React from "react";
import { Dot, DotsWrapper } from "./styled";

const DotsView = ({ length, onSelect, selectedIndex }) => {
  let dots = [];

  if (length) {
    for (let i = 0; i < length; i++) {
      dots = [...dots, i];
    }
  }

  return (
    <DotsWrapper>
      {dots.map(item => (
        <Dot
          key={item}
          onClick={onSelect(item)}
          active={item === selectedIndex}
        />
      ))}
    </DotsWrapper>
  );
};

export default DotsView;
