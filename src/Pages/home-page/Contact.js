import * as React from "react";
import { i18n } from "@lingui/core";

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="ro">
          <h2>{i18n._('contact us')}</h2>
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
