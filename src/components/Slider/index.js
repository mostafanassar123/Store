import React from "react";
import { ChildContainer, SliderContainer } from "./styled";
import Controllers from "./Controllers";
import DotsView from "./Dots";

const { useState, useCallback, useMemo, useEffect } = React;

function Slider({ children = [], autoPlay, autoPlayTime, noDots }) {
  const [activeIndex, setActiveIdx] = useState(0);

  const length = useMemo(() => {
    return children.length;
  }, [children]);

  const moveToIndex = useCallback(
    index => {
      setActiveIdx(index);
    },
    [setActiveIdx]
  );

  const onNext = useCallback(() => {
    let idx = length - 1 !== activeIndex ? activeIndex + 1 : 0;
    moveToIndex(idx);
  }, [moveToIndex, length, activeIndex]);

  useEffect(() => {
    let intervalID = null;
    if (autoPlay) {
      intervalID = setInterval(onNext, autoPlayTime);
    }
    return () => {
      if (autoPlay) {
        clearInterval(intervalID);
      }
    };
  }, [onNext, autoPlay, autoPlayTime]);

  const onPrev = useCallback(() => {
    let index = activeIndex === 0 ? length - 1 : activeIndex - 1;
    moveToIndex(index);
  }, [moveToIndex, length, activeIndex]);

  const onSelectDot = useCallback(
    item => () => {
      moveToIndex(item);
    },
    [moveToIndex]
  );

  const onKeyDown = useCallback(
    ({ keyCode, key }) => {
      if (keyCode === 37 || keyCode === 40) {
        onPrev();
      } else if (keyCode === 38 || keyCode === 39) {
        onNext();
      }
    },
    [onNext, onPrev]
  );

  return (
    <SliderContainer tabIndex={0} onKeyDown={onKeyDown}>
      {children.map((item, idx) => (
        <ChildContainer key={idx} show={idx === activeIndex} children={item} />
      ))}

      <Controllers tabIndex={1} onNext={onNext} onPrev={onPrev} />

      {!noDots && (
        <DotsView
          length={length}
          onSelect={onSelectDot}
          selectedIndex={activeIndex}
          tabIndex={2}
        />
      )}
    </SliderContainer>
  );
}

Slider.defaultProps = {
  images: [],
  autoPlay: true,
  autoPlayTime: 2000
};

export default Slider;
