import React from "react";
import { ControllersWrapper, Controller } from "./styled";

import leftChevron from "../../assests/left-chevron.svg";
import rightChevron from "../../assests/right-chevron.svg";

const Controllers = ({ onNext, onPrev }) => {
  return (
    <ControllersWrapper>
      <Controller src={leftChevron} alt="left" onClick={onPrev} />

      <Controller src={rightChevron} alt="right" onClick={onNext} />
    </ControllersWrapper>
  );
};

export default Controllers;
