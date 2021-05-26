import * as React from "react";
import { i18n } from "@lingui/core";

export function NavItem(props) {
  const { href, value } = props;
  return (
    <li>
      <a href={href}>{i18n._(value)}</a>
    </li>
  );
}
