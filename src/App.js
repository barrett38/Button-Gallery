import React from "react";
import BubblyButton from "./components/bubbly-button/Bubbly-Button";
import HeartyButton from "./components/hearty-button/Hearty-Button";
import ExpandingButton from "./components/ExpandingButton/ExpandingButton";
import GlowingButton from "./components/GlowingButton/GlowingButton";
import GradientSlideButton from "./components/GradientSlideButton/GradientSlideButton";

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
    </>
  );
};

export default App;
