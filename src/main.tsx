// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
// import { MainContract } from '@my_first_contract/contracts/wrappers/MainContract';

// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://smirnoffalexx.github.io/simple-ton-project-frontend/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
);
