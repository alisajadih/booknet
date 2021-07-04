import * as React from "react";
import { i18n } from "@lingui/core";
import { NavItem } from "./NavItem";
import LogoWhite from "styles/imgs/logowhite.png";
import { authMenuItems, notAuthMenuItems } from "shared/constants";
import { useAuthContext } from "shared/providers/AuthGuard";
import { useMutation, useQueryClient } from "react-query";
import { user } from "shared/fetchers";
import { getMenuItems } from "shared/navbar.utils";
import { useSnackbar } from "notistack";
import { _keyProfile } from "shared/fetchers/user";

export function Navbar() {
  const { me } = useAuthContext();

  const { mutate: logout } = useMutation(user.logout);

  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  const handleClickItem = (item) => () => {
    if (item.value === "logout") {
      logout();
      enqueueSnackbar(i18n._("You Logout Successfully"), {
        variant: "success",
      });
      queryClient.invalidateQueries(_keyProfile);
    }
  };
  return (
    <nav className="main-nav">
      <div className="container">
        <ul>
          {getMenuItems(!!me).map((item, index) => (
            <NavItem {...item} key={index} onClick={handleClickItem(item)} />
          ))}
        </ul>
        <button>
          <i className="fas fa-bars"></i>
        </button>
        <img src={LogoWhite} width="60" id="nav-brand" alt="" />
      </div>
    </nav>
  );
}
