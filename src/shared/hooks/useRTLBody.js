import * as React from "react";
export const useRTLBody = (isRTL = true) => {
  React.useLayoutEffect(() => {
    document.body.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);
};
