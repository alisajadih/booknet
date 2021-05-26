import * as React from "react";
import { i18n } from "@lingui/core";
import { ShelfItem } from "./ShelfItem";

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
  return (
    <section id="shelf">
      <ul>
        {shelfItems.map((item , index) => (
          <ShelfItem {...item} key={index} />
        ))}
      </ul>
    </section>
  );
}
