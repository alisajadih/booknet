import { Snackbar as MUISnackbar } from "@material-ui/core";
import * as React from "react";
import { Alert } from "./Alert";
import { i18n } from "@lingui/core";

export function Snackbar(props) {
  const { snack } = props;

  const [innerOpen, setInnerOpen] = React.useState(false);

  React.useEffect(() => {
    setInnerOpen(!!snack);
    console.log('here' , snack);
  }, [snack]);

  const handleClose = () => {
    setInnerOpen(false);
  };

  return (
    <MUISnackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      dir="rtl"
      autoHideDuration={3000}
      open={innerOpen}
      onClose={handleClose}
      key={"transision down"}
    >
      <Alert onClose={handleClose} severity={snack?.severity ?? "success"}>
        {i18n._(snack?.message)}
      </Alert>
    </MUISnackbar>
  );
}
