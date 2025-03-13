import React from "react";
import BubblyButton from "./components/bubbly-button/Bubbly-Button";
import HeartyButton from "./components/hearty-button/Hearty-Button";

const App = () => {
  return (
    <>
      <div>
        <BubblyButton>Click Me!</BubblyButton>
      </div>
      <div>
        <HeartyButton>Click Me!</HeartyButton>
      </div>
    </>
  );
};

export default App;
