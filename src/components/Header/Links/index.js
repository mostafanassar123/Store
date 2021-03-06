import React from "react";
import { List } from "./styled";
import ItemLink from "./ItemLink";

const { useState, useCallback } = React;

function HeaderItems() {
  const [activeLink, setActiveLink] = useState("Home");

  const onClick = useCallback(name => setActiveLink(name), [setActiveLink]);

  return (
    <List>
      <ItemLink to="/" name="Home" activeLink={activeLink} onClick={onClick} />
      <ItemLink name="Products" activeLink={activeLink} onClick={onClick} />
      <ItemLink name="Brands" activeLink={activeLink} onClick={onClick} />
      <ItemLink name="Favourites" activeLink={activeLink} onClick={onClick} />
      <ItemLink name="Why Nassar" activeLink={activeLink} onClick={onClick} />
      <ItemLink name="About Us" activeLink={activeLink} onClick={onClick} />
      <ItemLink name="Contact Us" activeLink={activeLink} onClick={onClick} />
    </List>
  );
}
export default HeaderItems;
