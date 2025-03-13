import React from "react";
import addBubbleToClick from "./addHeartsToClick.js";
import "./Hearty-Buttons-Styles.css";

const HeartyButton = ({ children }) => {
  return (
    <button className="bubbly-button" onClick={addBubbleToClick}>
      {children || "Click Me"}
    </button>
  );
};

export default HeartyButton;
