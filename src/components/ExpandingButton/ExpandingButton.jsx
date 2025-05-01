import React from "react";
import "./ExpandingButton.css";

const buttonLabel = "Click Me!";

const handleClick = () => {
  // alert("Button clicked!");
};

const ExpandingButton = ({
  label = `${buttonLabel}`,
  onClick = handleClick,
}) => {
  return (
    <button className="animated-button" onClick={onClick}>
      {label}
      <span className="ripple" />
    </button>
  );
};

export default ExpandingButton;
