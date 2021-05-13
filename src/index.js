import * as React from "react";
import { App } from "./App";
import ReactDOM from "react-dom";
import { configI18n } from "config";

configI18n();

ReactDOM.render(<App />, document.querySelector("#root"));
