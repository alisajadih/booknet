import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { i18n } from "@lingui/core";

export function EditSection(props) {
  const classes = useStyles(props);
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={12} container spacing={4}>
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              id="email"
              label={i18n._("Email Address")}
              name="email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              fullWidth
              className={classes.fullHeight}
            >
              {i18n._("edit")}
            </Button>
          </Grid>
        </Grid>
        <Box width="100%" marginTop="40px">
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={9}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label={i18n._("Password")}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                color="primary"
                variant="outlined"
                size="large"
                fullWidth
                className={classes.fullHeight}
              >
                {i18n._("edit")}
              </Button>
            </Grid>
          </Grid>
        </Box>
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
