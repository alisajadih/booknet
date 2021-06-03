import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { i18n } from "@lingui/core";
import LogoBlack from "styles/imgs/logoblack.png";

export function Header(props) {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <img src={LogoBlack} alt="" className={classes.avatar} />
      <Typography component="h1" variant="h5">
        {i18n._("Sign up")}
      </Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    width: 100,
  },
}));
