import React from "react";
import Button from "./styled.js";

// const [btnState ,setBtnState]= useState();

function SletterButton({ color, name = "new arrival" }) {
  return <Button color={color}>{name}</Button>;
}
export default SletterButton;
