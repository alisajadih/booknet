import { authMenuItems, menuItems, notAuthMenuItems } from "./constants";

export const getMenuItems = (isAuth) => {
  return menuItems.concat(getAuthItems(isAuth));
};
export const getAuthItems = (isAuth) => (isAuth ? authMenuItems : notAuthMenuItems);
