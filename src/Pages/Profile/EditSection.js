import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { i18n } from "@lingui/core";
import * as React from "react";
import { useMutation } from "react-query";
import { user } from "shared/fetchers";
import { useSnackbar } from "notistack";
import { useAuthContext } from "shared/providers/AuthGuard";

export function EditSection(props) {
  const classes = useStyles(props);

  const { enqueueSnackbar } = useSnackbar();

  const { me } = useAuthContext();

  const [name, setName] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    if (!!me) {
      setName(me.name);
      setEmail(me.email);
      setUsername(me.username);
    }
  }, [me]);

  const { mutate: updateProfile } = useMutation(user.updateProfile);

  const handleSubmit = (type) => () => {
    let userData;
    if (type === "name") userData = { name };
    if (type === "email") userData = { email };
    if (type === "username") userData = { username };
    updateProfile(userData, {
      onSuccess: () => {
        enqueueSnackbar(i18n._("user updated succesfully"), {
          variant: "success",
        });
      },
      onError: () => {
        enqueueSnackbar(i18n._("something went wrong"), {
          variant: "error",
        });
      },
    });
  };

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={12} container spacing={4}>
          <Grid item xs={9}>
            <TextField
              value={email}
              variant="outlined"
              id="email"
              label={i18n._("Email Address")}
              name="email"
              fullWidth
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              color="primary"
              variant="outlined"
              size="large"
              fullWidth
              className={classes.fullHeight}
              onClick={handleSubmit("email")}
            >
              {i18n._("edit")}
            </Button>
          </Grid>
        </Grid>
        <Box width="100%" marginTop="40px">
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={9}>
              <TextField
                value={name}
                variant="outlined"
                fullWidth
                name="name"
                label={i18n._("name")}
                type="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                color="primary"
                variant="outlined"
                size="large"
                fullWidth
                className={classes.fullHeight}
                onClick={handleSubmit("name")}
              >
                {i18n._("edit")}
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box width="100%" marginTop="40px">
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={9}>
              <TextField
                value={username}
                variant="outlined"
                fullWidth
                name="username"
                label={i18n._("username")}
                type="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                color="primary"
                variant="outlined"
                size="large"
                fullWidth
                className={classes.fullHeight}
                onClick={handleSubmit("username")}
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
