import React from "react";
import Logo from "./logo";
import List from "./Links";
// import Search from "./Search";
import { Input } from "antd";

import { HeaderContainer, RightSection } from "./styled";

const { Search } = Input;
const { useState } = React;

function Header() {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const onBlure = () => {
    setFocused(false);
  };

  return (
    <HeaderContainer>
      <Logo />
      <RightSection>
        <List />
        <Search
          onFocus={handleFocus}
          enterButton
          onBlur={onBlure}
          focused={focused}
          style={{
            maxWidth: "250px"
          }}
        />
      </RightSection>
    </HeaderContainer>
  );
}

export default Header;
