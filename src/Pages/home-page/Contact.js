import * as React from "react";
import { i18n } from "@lingui/core";
import { useScrollByRouteHash } from "shared/useScrollByRouteHash";
import { HASHES } from "shared/constants";

export function Contact() {
  const ref = useScrollByRouteHash({ hash: HASHES.CONTACT });
  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="ro">
          <h2>{i18n._("contact us")}</h2>
          <span className="underline"></span>
          <ul>
            <li>
              <i className="fas fa-phone"></i>
              <p>09185865212</p>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <p>support@booknet.ir</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
