import * as React from "react";
import { i18n } from "@lingui/core";
import { NavItem } from "./NavItem";
import LogoWhite from "styles/imgs/logowhite.png";

const menuItems = [
  {
    value: i18n._("contact"),
    href: "/#contact",
  },
  {
    value: i18n._("shelfs"),
    href: "/#shelfs",
  },
  {
    value: i18n._("services"),
    href: "/#services",
  },
  {
    value: i18n._("section info"),
    href: "/#section-info",
  },
  {
    value: i18n._("Sign in"),
    href: "/login",
  },
  {
    value: i18n._("Sign up"),
    href: "/signup",
  },
];

export function Navbar() {
  return (
    <nav className="main-nav">
      <div className="container">
        <ul>
          {menuItems.map((item, index) => (
            <NavItem {...item} key={index} />
          ))}
        </ul>
        <button>
          <i className="fas fa-bars"></i>
        </button>
        <img src={LogoWhite} width="60" id="nav-brand" alt="" />
      </div>
    </nav>
  );
}
