import * as React from "react";
import { ShelfItem } from "./ShelfItem";
import { useScrollByRouteHash } from "shared/hooks";
import { HASHES, shelfItems } from "shared/constants";

export function Shelf() {
  const ref = useScrollByRouteHash({ hash: HASHES.SHELFS }); //
  return (
    <section id="shelf" ref={ref}>
      <ul>
        {shelfItems.map((item, index) => (
          <ShelfItem {...item} key={index} />
        ))}
      </ul>
    </section>
  );
}
