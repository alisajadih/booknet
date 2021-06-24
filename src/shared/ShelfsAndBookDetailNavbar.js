import { AppBar, makeStyles, Toolbar, Box, Link } from "@material-ui/core";
import LogoBlack from "styles/imgs/logoblack.png";
import { i18n } from "@lingui/core";
import { NavLink as RRDLink } from "react-router-dom";
import { authMenuItems, shelfItems } from "shared/constants";

export function ShelfsAndBookDetailNavbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} variant="outlined" position="static">
      <Toolbar>
        <RRDLink to="/">
          <img src={LogoBlack} alt="" className={classes.avatar} />
        </RRDLink>
        <Box flexGrow="1" />
        <Box display="flex" gridGap="32px">
          {authMenuItems.map(({ value, href }) => (
            <Link
              key={value}
              component={RRDLink}
              to={href}
              variant="h6"
              color="textPrimary"
              activeClassName={classes.activeClassName}
            >
              {i18n._(value)}
            </Link>
          ))}
          {shelfItems.map(({ href, subtitle }) => (
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
