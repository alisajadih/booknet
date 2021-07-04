import * as React from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { i18n } from "@lingui/core";
import { Links } from "./Links";
import { Grid } from "@material-ui/core";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { convertFormDataForRegister, signUpSchema } from "./utils";
import { user } from "shared/fetchers";
import { token } from "shared/constants";
import { redirect } from "shared/history.utils";
import { convertErrorDataToStringValue } from "shared/error.utils";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

export function Form(props) {
  const classes = useStyles(props);

  const { mutate: registerMutate } = useMutation(user.register);

  const { mutate: loginMutate } = useMutation(user.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    Object.values(errors).forEach((error) => {
      enqueueSnackbar(i18n._(error.message), {
        variant: "error",
      });
    });
  }, [enqueueSnackbar, errors]);

  
  const onSubmit = (data) => {
    const userData = convertFormDataForRegister(data);
    registerMutate(userData, {
      onSuccess: () => {
        const { username, password } = userData;
        loginMutate(
          { username, password },
          {
            onSuccess: (res) => {
              localStorage.setItem(token, res.data.token);
              redirect("/");
            },
          }
        );
        enqueueSnackbar(i18n._("You Sign up Successfully"), {
          variant: "success",
        });
      },
      onError: (err) => {
        const { data } = err.response;
        const errorData = convertErrorDataToStringValue(data.errors, "submit");
        errorData.forEach(({ field, error }) => {
          enqueueSnackbar(i18n._(error.message), {
            variant: "error",
          });
          setError(field, error);
        });
      },
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            variant="outlined"
            fullWidth
            id="firstName"
            label={i18n._("First Name")}
            autoFocus
            {...register("firstName")}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            id="lastName"
            label={i18n._("Last Name")}
            name="lastName"
            {...register("lastName")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            id="username"
            label={i18n._("username")}
            name="username"
            autoComplete="username"
            {...register("username")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            label={i18n._("Email Address")}
            name="email"
            autoComplete="email"
            {...register("email")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            name="password"
            label={i18n._("Password")}
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            name="password_confirmation"
            label={i18n._("Confirm Password")}
            type="password"
            id="confirm_password"
            autoComplete="current-password"
            {...register("password_confirmation")}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {i18n._("Sign up")}
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
