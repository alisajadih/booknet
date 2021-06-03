import * as React from "react";
import { i18n } from "@lingui/core";
import { ShelfItem } from "./ShelfItem";
import { useScrollByRouteHash } from "shared/useScrollByRouteHash";
import { SHELFS_ROUTE_STATE } from "shared/constants";

const shelfItems = [
  {
    title: i18n._("shelf"),
    subtitle: i18n._("roman"),
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("tarikhi"),
  },

  {
    title: i18n._("shelf"),
    subtitle: i18n._("shero adabiat"),
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("ravan shenasi"),
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("falsafe"),
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("tanz"),
  },
];

export function Shelf() {
  const ref = useScrollByRouteHash({ hash: "#shelfs" }); // 
  return (
    <section id="shelf" ref={ref}>
      <ul>
        {shelfItems.map((item, index) => (
          <ShelfItem {...item} key={index} />
        ))}
      </ul>
    </section>
  );
}
