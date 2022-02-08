import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Router from "./Route/Router";
import { GlobalState } from "./global/GlobalState";

const App = () => {
  return (
    <>
      <GlobalState>
        <GlobalStyles />
        <Router />
      </GlobalState>
    </>
  );
};

export default App;
