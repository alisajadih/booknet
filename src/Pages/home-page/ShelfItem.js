import * as React from "react";
import { i18n } from "@lingui/core";
import { Link } from "react-router-dom";

export function ShelfItem(props) {
  const { title, subtitle, href } = props;
  return (
    <li>
      <Link to={href}>
        <div className="port-hover">
          <h4>{i18n._(title)}</h4>
          <h2>{i18n._(subtitle)}</h2>
        </div>
      </Link>
    </li>
  );
}
