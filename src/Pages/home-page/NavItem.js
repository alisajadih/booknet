import * as React from "react";
import { i18n } from "@lingui/core";
import { Link } from "react-router-dom";

export function NavItem(props) {
  const { href, value , onClick = ()=>{} } = props;
  return (
    <li onClick={onClick}>
      <Link to={href}>{i18n._(value)}</Link>
    </li>
  );
}
