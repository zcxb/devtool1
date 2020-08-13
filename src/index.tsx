import * as React from "react";
import * as ReactDOM from "react-dom";

import HomePage from "./components/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode >,
  document.getElementById('root') as HTMLElement
);
