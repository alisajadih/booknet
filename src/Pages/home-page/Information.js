import * as React from "react";
import { i18n } from "@lingui/core";
import { HASHES } from "shared/constants";
import { useScrollByRouteHash } from "shared/useScrollByRouteHash";

export function Information() {
  const ref = useScrollByRouteHash({ hash: HASHES.SECTION_INFO });
  return (
    <section id="section-info" ref={ref}>
      <div className="container">
        <div className="row">
          <h2>{i18n._("info header")}</h2>
          <span className="underline"></span>
          <p id="info-p">{i18n._("info p 1")}</p>
          <p id="info-p">{i18n._("info p 2")}</p>
        </div>
      </div>
    </section>
  );
}
