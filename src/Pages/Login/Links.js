import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { i18n } from "@lingui/core";
import { Link as RRDLink } from "react-router-dom";
export function Links(props) {
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Link component={RRDLink} to="/signup" href="#" variant="body1">
          {i18n._("Don't have an account? Sign Up")}
        </Link>
      </Grid>
      <Grid item>
        <Link component={RRDLink} to="/" variant="body1">
          {i18n._("Back to home")}
        </Link>
      </Grid>
    </Grid>
  );
}
