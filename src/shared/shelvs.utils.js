import { i18n } from "@lingui/core";
export const getShelvesFromApiData = (data) => {
  if (!data) return [];
  return data.map((item) => ({
    title: i18n._("shelf"),
    subtitle: i18n._(item.name),
    href: `/shelfs/${item.name.split(" ").join("-")}`,
  }));
};
