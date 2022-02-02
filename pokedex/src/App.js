import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Router from "./Route/Router";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router />
    </div>
  );
}

export default App;
