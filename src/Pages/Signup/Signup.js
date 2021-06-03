import { makeStyles, Grid } from "@material-ui/core";
import { SideImage } from "./SideImage";
import { SideForm } from "./SideForm";
import { useRTLBody } from "shared/useRTLBody";

export function Signup(props) {
  const classes = useStyles();
  useRTLBody();

  return (
    <Grid container className={classes.root} component="main">
      <SideImage />
      <SideForm />
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));
