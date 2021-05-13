import { i18n } from "@lingui/core";
import fa from "locales/fa/messages";
export const configI18n = () => {
  i18n.load({ fa });
  i18n.activate("fa");
};
