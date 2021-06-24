import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import * as React from "react";
import Book1 from "styles/imgs/books/1.jpg";
import { i18n } from "@lingui/core";

export function BookCardInformation(props) {
  const classes = useStyles(props);
  return (
    <Container className={classes.container}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={Book1}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Grid container justifyContent="between">
                  <Grid item xs={9}>
                    <Typography component="h5" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {i18n._("book nevisande")}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {i18n._("book motarjem")}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {i18n._("book entesharat")}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.buttons}>
                    <Button
                      color="primary"
                      variant="outlined"
                      size="large"
                      fullWidth
                      className={classes.fullHeight}
                    >
                      {i18n._("download")}
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      fullWidth
                      className={classes.fullHeight}
                    >
                      {i18n._("digikala")}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Card className={classes.descriptionCard}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                          component="h5"
                          variant="h5"
                        >
                         {i18n._("moarefi book")} 
                        </Typography>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                          variant="subtitle1"
                        >
                          alkdgjhlk adjglkj adkljgl akjdlgk jalkdjg lakdjgl
                          jadlkgj
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                {/* <div></div> */}
                {/* <div className={classes.buttons}></div> */}
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 16, 0, 16),
    maxWidth: "100%",
  },
  root: {
    display: "flex",
    height: 500,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  cover: {
    width: 300,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  descriptionCard: {
    border: `1px solid ${theme.palette.primary.main}`,
    minHeight: 260,
  },
}));
