import React from "react";

import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton.jsx";
import BubblyButton from "./components/bubbly-button/Bubbly-Button";
import HeartyButton from "./components/hearty-button/Hearty-Button";
import ExpandingButton from "./components/ExpandingButton/ExpandingButton";
import GlowingButton from "./components/GlowingButton/GlowingButton";
import GradientSlideButton from "./components/GradientSlideButton/GradientSlideButton";
import LoadingSuccessButton from "./components/LoadingSuccessButton/LoadingSuccessButton";

const App = () => {
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <ThemeToggleButton />
      </div>
      <div>Placeholder for some content</div>
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
        <LoadingSuccessButton
          label="Submit Form"
          onClick={() => console.log("Form submitted")}
        />
      </div>
    </>
  );
};

export default App;
