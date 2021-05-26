import React from "react";
import { i18n } from "@lingui/core";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <h1 className="heading-1">{i18n._("book net")}</h1>
          <span className="underline"></span>
          <p className="heading-p">{i18n._("header text")}</p>
          <a href="#shelf" id="heading-link">
            <span>{i18n._("go to shelf")}</span>
            <span className="material-icons bounce">south</span>
          </a>
        </div>
      </div>
    </header>
  );
}
