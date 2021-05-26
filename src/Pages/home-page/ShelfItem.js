import * as React from "react";
import { i18n } from "@lingui/core";

export function ShelfItem(props) {
  const { title, subtitle } = props;
  return (
    <li>
      <div className="port-hover">
        <h4>{i18n._(title)}</h4>
        <h2>{i18n._(subtitle)}</h2>
      </div>
    </li>
  );
}
