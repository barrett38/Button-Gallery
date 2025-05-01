import React from "react";
import "./ExpandingButton.css";

const ExpandingButton = ({ label = "Click Me", onClick }) => {
  return (
    <button className="animated-button" onClick={onClick}>
      {label}
      <span className="ripple" />
    </button>
  );
};

export default ExpandingButton;
