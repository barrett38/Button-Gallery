import React from "react";
import addBubbleToClick from "./addBubbleToClick.js";
import "./Bubbly-Buttons-Styles.css";

const BubblyButton = ({ children }) => {
  return (
    <button className="bubbly-button" onClick={addBubbleToClick}>
      {children || "Click Me"}
    </button>
  );
};

export default BubblyButton;
