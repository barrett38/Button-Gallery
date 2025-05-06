import React from "react";

import CopyToClipboardButton from "./components/CopyToClipboardButton/CopyToClipboardButton.jsx";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton.jsx";
import BubblyButton from "./components/bubbly-button/Bubbly-Button.jsx";
import HeartyButton from "./components/hearty-button/Hearty-Button.jsx";
import ExpandingButton from "./components/ExpandingButton/ExpandingButton.jsx";
import GlowingButton from "./components/GlowingButton/GlowingButton.jsx";
import GradientSlideButton from "./components/GradientSlideButton/GradientSlideButton.jsx";
import LoadingSuccessButton from "./components/LoadingSuccessButton/LoadingSuccessButton.jsx";

const App = () => {
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <ThemeToggleButton />
      </div>
      <div>
        <CopyToClipboardButton>Placeholder too</CopyToClipboardButton>
      </div>
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
