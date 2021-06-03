import * as React from "react";
import { App } from "./App";
import ReactDOM from "react-dom";
import { configI18n } from "config";
import "./styles/landing.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "config/theme";
import { RTLProvider } from "shared/RTLProvider";

configI18n();

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RTLProvider>
        <CssBaseline />
        <App />
      </RTLProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
