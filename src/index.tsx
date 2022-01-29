import "./styles/index.css";
import "./styles/global.css";
import { render } from "solid-js/web";

import App from "./App";
import { Router } from "solid-app-router";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
