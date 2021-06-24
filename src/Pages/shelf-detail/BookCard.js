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

export function BookCard(props) {
  const classes = useStyles(props);
  
  const { name, image } = props;

  const history = useHistory()

  const handleClick = () => {
    // history.push('/')
  }

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {i18n._(name)}
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
