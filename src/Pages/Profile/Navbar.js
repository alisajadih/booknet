import { AppBar, makeStyles, Toolbar, Box, Link } from "@material-ui/core";
import { useRTLBody } from "shared/useRTLBody";
import LogoBlack from "styles/imgs/logoblack.png";
import { i18n } from "@lingui/core";
import { NavLink as RRDLink } from "react-router-dom";
import { HASHES, SHELFS_ROUTE_STATE } from "shared/constants";

export function Navbar(props) {
  const classes = useStyles(props);
  useRTLBody();
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
