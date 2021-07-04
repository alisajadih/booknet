import * as React from "react";
import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";
import { makeStyles, Slide } from "@material-ui/core";

export const SnackbarProvider = (props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <NotistackSnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      TransitionComponent={Slide}
      dir="rtl"
      classes={{
        root: classes.root,
        containerRoot: classes.root,
      }}
      autoHideDuration={3000}
    >
      {children}
    </NotistackSnackbarProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& #notistack-snackbar": {
      fontWeight: "bold",
    },
  },
}));
