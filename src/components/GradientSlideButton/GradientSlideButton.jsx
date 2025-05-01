import React from "react";
import "./GradientSlideButton.css";

const buttonLabel = "Submit";

const GradientSlideButton = ({ label = `${buttonLabel}`, onClick }) => {
  return (
    <button className="gradient-slide-btn" onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};

export default GradientSlideButton;
