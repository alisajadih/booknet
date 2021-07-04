import { i18n } from "@lingui/core";

export const token = "TOKEN";

export const menuItems = [
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
];

export const HASHES = {
  SHELFS: "#shelfs",
  SERVICES: "#services",
  SECTION_INFO: "#section-info",
  CONTACT: "#contact",
};

export const shelfItems = [
  {
    title: i18n._("shelf"),
    subtitle: i18n._("roman"),
    href: "/shelfs/roman",
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("tarikhi"),
    href: "/shelfs/tarikhi",
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("shero adabiat"),
    href: "/shelfs/shero-adabiat",
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("ravan shenasi"),
    href: "/shelfs/ravan-shenasi",
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("falsafe"),
    href: "/shelfs/falsafe",
  },
  {
    title: i18n._("shelf"),
    subtitle: i18n._("tanz"),
    href: "/shelfs/tanz",
  },
];

export const notAuthMenuItems = [
  {
    value: i18n._("Sign in"),
    href: "/login",
  },
  {
    value: i18n._("Sign up"),
    href: "/signup",
  },
];
export const authMenuItems = [

  {
    value: i18n._("profile"),
    href: "/profile",
  },
  {
    value: i18n._("logout"),
    href: "/",
  }
]