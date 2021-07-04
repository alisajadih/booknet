import * as Yup from "yup";
import { i18n } from "@lingui/core";
export const convertFormDataForRegister = (user) => {
  const { firstName, lastName, ...restUser } = user;
  return {
    name: `${firstName} ${lastName}`,
    ...restUser,
  };
};

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required(i18n._("firstName is required")),
  lastName: Yup.string().required(i18n._("lastName is required")),
  username: Yup.string().required(i18n._("username is required")),
  email: Yup.string()
    .email(i18n._("email format is incorrect"))
    .required(i18n._("email is required")),
  password: Yup.string()
    .required(i18n._("Password is required"))
    .min(5, i18n._("Password should be at least 5 characters")),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    i18n._("Passwords must match")
  ),
});
