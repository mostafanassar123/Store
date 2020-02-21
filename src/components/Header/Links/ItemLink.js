import React from "react";
import { ListItem, ListItemLink } from "./styled";

const ItemLink = ({ to, name, activeLink, onClick }) => {
  let pathTo = to;
  if (!to) {
    pathTo = `/${name}`.replace(" ", "");
  }

  const handlePress = () => {
    onClick(name);
  };

  return (
    <ListItemLink
      to={pathTo}
      onClick={handlePress}
      active={(activeLink === name).toString()}
    >
      <ListItem>{name}</ListItem>
    </ListItemLink>
  );
};

export default ItemLink;
