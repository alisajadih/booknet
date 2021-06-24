import {
  makeStyles,
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
import * as React from "react";
import { i18n } from "@lingui/core";

export function Comments(props) {
  const classes = useStyles(props);
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid xs={12}>
          <Typography component="h5" variant="h5">
            {i18n._("users comments")}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="search"
            label={i18n._("write your comment")}
            autoFocus
            InputProps={{
              endAdornment: (
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className={classes.fullHeight}
                >
                  {i18n._("send")}
                </Button>
              ),
            }}
          />
          <Grid xs={12}>
            <List>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography component="span" variant="h5">
                        اوستاد میفرمودیه
                      </Typography>
                      {` -۱۳۹۶`}
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography component="span" variant="body1">
                        اوستاد میفرمودیه
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider  component="li" />
            </List>
          </Grid>
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
  fullHeight: {
    height: "100%",
  },
}));
