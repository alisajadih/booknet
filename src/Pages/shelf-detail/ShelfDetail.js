import { ShelfsAndBookDetailNavbar } from "shared/ShelfsAndBookDetailNavbar";
import * as React from "react";
import { useRTLBody } from "shared/hooks";
import { BookResults } from "./BookResults";

export function ShelfDetail() {
  useRTLBody();
  return (
    <React.Fragment>
      <ShelfsAndBookDetailNavbar />
      <BookResults />
    </React.Fragment>
  );
}
