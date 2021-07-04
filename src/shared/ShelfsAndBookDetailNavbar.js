import * as React from "react";
import { AppBar, makeStyles, Toolbar, Box, Link } from "@material-ui/core";
import LogoBlack from "styles/imgs/logoblack.png";
import { i18n } from "@lingui/core";
import { NavLink as RRDLink } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { category, user } from "./fetchers";
import { getShelvesFromApiData } from "./shelvs.utils";
import { getAuthItems } from "./navbar.utils";
import { useAuthContext } from "./providers/AuthGuard";
import { useSnackbar } from "notistack";
import { _keyProfile } from "./fetchers/user";

export function ShelfsAndBookDetailNavbar() {
  const classes = useStyles();

  const { me } = useAuthContext();

  const { data } = useQuery("/category", category.get);

  const shelvs = getShelvesFromApiData(data?.data);

  const { mutate: logout } = useMutation(user.logout);

  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();

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
    <AppBar className={classes.appbar} variant="outlined" position="static">
      <Toolbar>
        <RRDLink to="/">
          <img src={LogoBlack} alt="" className={classes.avatar} />
        </RRDLink>
        <Box flexGrow="1" />
        <Box display="flex" gridGap="32px">
          {getAuthItems(!!me).map(({ value, href, ...rest }) => (
            <Link
              key={value}
              component={RRDLink}
              variant="h6"
              color="textPrimary"
              to={href}
              activeClassName={classes.activeClassName}
              exact={value === "logout"}
              onClick={handleClickItem({ value, href, ...rest })}
            >
              {i18n._(value)}
            </Link>
          ))}
          {shelvs.map(({ href, subtitle }) => (
            <Link
              key={subtitle}
              component={RRDLink}
              to={href}
              variant="h6"
              color="textPrimary"
              activeClassName={classes.activeClassName}
            >
              {i18n._(subtitle)}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.grey[200],
    padding: theme.spacing(0, 16),
  },
  avatar: {
    margin: theme.spacing(1),
    width: 50,
  },
  activeClassName: {
    color: theme.palette.primary.main,
  },
}));
