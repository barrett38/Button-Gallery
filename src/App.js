import React from "react";
import BubblyButton from "./components/bubbly-button/Bubbly-Button";
import HeartyButton from "./components/hearty-button/Hearty-Button";
import ExpandingButton from "./components/ExpandingButton/ExpandingButton";
import GlowingButton from "./components/GlowingButton/GlowingButton";
import GradientSlideButton from "./components/GradientSlideButton/GradientSlideButton";
import LoadingSuccessButton from "./components/LoadingSuccessButton/LoadingSuccessButton";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton.jsx";

const App = () => {
  return (
    <>
      <div>
        <ExpandingButton>Click Me!</ExpandingButton>
      </div>
      <div>
        <BubblyButton>Click Me!</BubblyButton>
      </div>
      <div>
        <HeartyButton />
      </div>
      <div>
        <GlowingButton />
      </div>
      <div>
        <GradientSlideButton />
      </div>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Async Button Feedback</h2>
        <LoadingSuccessButton
          label="Submit Form"
          onClick={() => console.log("Form submitted")}
        />
      </div>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Toggle Light / Dark Mode</h2>
        <ThemeToggleButton />
      </div>
    </>
  );
};

export default App;
