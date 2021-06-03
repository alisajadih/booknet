import { Grid, TextField } from "@material-ui/core";
import * as React from "react";
import { EditSection } from "./EditSection";
import { Navbar } from "./Navbar";

export function Profile(props) {
  return (
    <React.Fragment>
      <Navbar />
      <EditSection />
    </React.Fragment>
  );
}
