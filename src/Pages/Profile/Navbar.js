import { AppBar, makeStyles, Toolbar, Box, Link } from "@material-ui/core";
import LogoBlack from "styles/imgs/logoblack.png";
import { i18n } from "@lingui/core";
import { NavLink as RRDLink } from "react-router-dom";
import { HASHES } from "shared/constants";
import { useMutation, useQueryClient } from "react-query";
import { user } from "shared/fetchers";
import { redirect } from "shared/history.utils";
import { useSnackbarContext } from "shared/providers/SnackbarProvider";
import { useSnackbar } from "notistack";
import { _keyProfile } from "shared/fetchers/user";

export function Navbar(props) {
  const classes = useStyles(props);

  const { mutate: logout } = useMutation(user.logout);

  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();

  const handleLogout = () => {
    logout();
    enqueueSnackbar(i18n._("You Logout Successfully"), {
      variant: "success",
    });
    queryClient.invalidateQueries(_keyProfile);
  };

  return (
    <AppBar className={classes.appbar} variant="outlined" position="static">
      <Toolbar>
        <RRDLink to="/">
          <img src={LogoBlack} alt="" className={classes.avatar} />
        </RRDLink>
        <Box flexGrow="1" />
        <Box display="flex" gridGap="32px">
          <Link
            component={RRDLink}
            to="/"
            variant="h6"
            color="textPrimary"
            activeClassName={classes.activeClassName}
            exact
          >
            {i18n._("Home")}
          </Link>
          <Link
            component={RRDLink}
            to={{ pathname: "/", hash: HASHES.SHELFS }}
            variant="h6"
            color="textPrimary"
            exact
            activeClassName={classes.activeClassName}
          >
            {i18n._("shelfs")}
          </Link>
          <Link
            component={RRDLink}
            to="/profile"
            variant="h6"
            color="textPrimary"
            activeClassName={classes.activeClassName}
          >
            {i18n._("profile")}
          </Link>
          <Link
            component={RRDLink}
            to="/login"
            variant="h6"
            color="textPrimary"
            activeClassName={classes.activeClassName}
            onClick={handleLogout}
          >
            {i18n._("logout")}
          </Link>
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
