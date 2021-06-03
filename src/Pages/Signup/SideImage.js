import { makeStyles, Grid } from "@material-ui/core";
import Signup from "styles/imgs/auth/5.jpeg";

export function SideImage(props) {
  const classes = useStyles(props);
  return <Grid item xs={false} sm={4} md={7} className={classes.image} />;
}

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: `url(${Signup})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));
