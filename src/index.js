import * as React from "react";
import { App } from "./App";
import ReactDOM from "react-dom";
import { configI18n } from "config";
import "./styles/landing.css";

configI18n();

ReactDOM.render(<App />, document.querySelector("#root"));
