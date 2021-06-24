import { Grid, TextField } from "@material-ui/core";
import * as React from "react";
import { useRTLBody } from "shared/hooks";
import { EditSection } from "./EditSection";
import { Navbar } from "./Navbar";

export function Profile(props) {
  useRTLBody();
  return (
    <React.Fragment>
      <Navbar />
      <EditSection />
    </React.Fragment>
  );
}
