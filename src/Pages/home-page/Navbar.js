import * as React from "react";
import { i18n } from "@lingui/core";
import { NavItem } from "./NavItem";

const menuItems = [
  {
    value: i18n._("contact"),
    href: "#contact",
  },
  {
    value: i18n._("shelfs"),
    href: "#shelf",
  },
  {
    value: i18n._("services"),
    href: "#services",
  },
  {
    value: i18n._("section info"),
    href: "#section-info",
  },
];

export function Navbar() {
  return (
    <nav>
      <div className="container">
        <ul>
          {menuItems.map((item, index) => (
            <NavItem {...item} key={index} />
          ))}
        </ul>
        <button>
          <i className="fas fa-bars"></i>
        </button>
        <img
          src="./styles/imgs/logowhite.png"
          width="60"
          id="nav-brand"
          alt=""
        />
      </div>
    </nav>
  );
}
