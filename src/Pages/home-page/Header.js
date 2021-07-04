import React from "react";
import { i18n } from "@lingui/core";
import {Link} from 'react-router-dom'

export function Header() {
  return (
    <header className='main-header'>
      <div className="container">
        <div className="row">
          <h1 className="heading-1">{i18n._("book net")}</h1>
          <span className="underline"></span>
          <p className="heading-p">{i18n._("header text")}</p>
          <Link to="/#shelfs" id="heading-link">
            <span>{i18n._("go to shelf")}</span>
            <span className="material-icons bounce">south</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
