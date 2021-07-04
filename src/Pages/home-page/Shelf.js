import * as React from "react";
import { ShelfItem } from "./ShelfItem";
import { useScrollByRouteHash } from "shared/hooks";
import { HASHES, shelfItems } from "shared/constants";
import { useQuery } from "react-query";
import { getShelvesFromApiData } from "shared/shelvs.utils";
import { category } from "shared/fetchers";

export function Shelf() {
  const ref = useScrollByRouteHash({ hash: HASHES.SHELFS }); //

  const { data } = useQuery("/category", category.get);
  const shelvs = getShelvesFromApiData(data?.data);
  return (
    <section id="shelf" ref={ref}>
      <ul>
        {shelvs.map((item, index) => (
          <ShelfItem {...item} key={index} />
        ))}
      </ul>
    </section>
  );
}
