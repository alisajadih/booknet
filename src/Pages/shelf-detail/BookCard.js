import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { i18n } from "@lingui/core";
import { useHistory } from "react-router-dom";
import { redirect } from "shared/history.utils";

export function BookCard(props) {
  const classes = useStyles(props);

  const { title, image, to } = props;

  const handleClick = () => {
    redirect(to);
  };

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
const useStyles = makeStyles({
  media: {
    height: 420,
  },
});
