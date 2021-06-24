import * as React from "react";
import { useLocation } from "react-router";

export function useScrollByRouteHash(props) {
  const { hash: hashFromProps } = props;
  const location = useLocation();
  const ref = React.useRef();
  React.useLayoutEffect(() => {
    const { hash } = location;
    if (hash === hashFromProps) {
      ref.current?.scrollIntoView();
    }
  }, [location, hashFromProps]);
  return ref;
}
