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
import { i18n } from "@lingui/core";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { book } from "shared/fetchers";

export function BookCardInformation(props) {
  const classes = useStyles(props);

  const { id } = useParams();

  const { data } = useQuery(["/book", id], book.getSingle, { enabled: !!id });

  if (!data) return "";

  const { title, description, year, publisher, authors, image, pdf, digikala } =
    data.data;

  return (
    <Container className={classes.container}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={image}
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Grid container justify="space-between">
                  <Grid item xs={9}>
                    <Typography component="h5" variant="h5">
                      {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {i18n._("book nevisande")} : {authors[0].name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {i18n._("year")} : {year}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {i18n._("book entesharat")} :{publisher.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.buttons}>
                    <Button
                      color="primary"
                      variant="outlined"
                      size="large"
                      fullWidth
                      className={classes.fullHeight}
                      component="a"
                      href={pdf}
                      target="_blank"
                    >
                      {i18n._("download")}
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      fullWidth
                      className={classes.fullHeight}
                      component="a"
                      href={digikala}
                      target="_blank"
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
                          {description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
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
    width: 500,
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
