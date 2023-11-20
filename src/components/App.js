import React from "react";
import LandingPage from "./LandingPage.js";
import { MobileProvier } from "./MobileContext.js";

function App() {
  return (
    <>
      <MobileProvier>
        <LandingPage />
      </MobileProvier>
    </>
  );
}

export default App;
