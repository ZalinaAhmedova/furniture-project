import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import store from "./store/index.js";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/reset.css";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: var(--family);
    font-weight: normal;
    font-size: var(--fs-md);
    color: var(--dark);
  }

  :root {
    --family: "Inter", sans-serif;
    --fs-xs: 12px;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 18px;
    --fs-xl: 32px;
    --bg-gray: #EFF2F1;
    --bg-green: #3B5D50;
    --white: #FFF;
    --orange: #F9BF29;
    --dark: #2F2F2F;
    --gray: #6A6A6A;
    --mid-gray: #808080;
    --medium: 500;
    --semi-bold: 600;
    --lh-sm: 22px;
    --lh-md: 24px;
    --lh-lg: 28px;
    --lh-xl: 41px;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </Provider>
);
