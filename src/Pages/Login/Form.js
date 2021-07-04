import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { i18n } from "@lingui/core";
import { Links } from "./Links";
import { useMutation, useQueryClient } from "react-query";
import { user } from "shared/fetchers";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { redirect } from "shared/history.utils";
import { token } from "shared/constants";
import { useSnackbar } from "notistack";
import { _keyProfile } from "shared/fetchers/user";

export function Form(props) {
  const classes = useStyles(props);

  const { mutate: loginMutate } = useMutation(user.login);

  const { register, handleSubmit } = useForm();

  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    loginMutate(data, {
      onSuccess: (res) => {
        enqueueSnackbar(i18n._("You Log in Successfully"), {
          variant: "success",
        });
        queryClient.invalidateQueries(_keyProfile);
        redirect("/");
        localStorage.setItem(token, res.data.token);
      },
      onError: (error) => {
        enqueueSnackbar(i18n._("invalid username or password"), {
          variant: "error",
        });
      },
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="username"
        label={i18n._("username")}
        name="username"
        autoComplete="username"
        autoFocus
        {...register("username")}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label={i18n._("Password")}
        type="password"
        id="password"
        autoComplete="current-password"
        {...register("password")}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {i18n._("Sign in")}
      </Button>

      <Links />
    </form>
  );
}
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
