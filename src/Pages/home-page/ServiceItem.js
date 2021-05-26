import * as React from "react";
import { i18n } from "@lingui/core";

export function ServiceItem(props) {
  const { logo, title, content } = props;

  return (
    <div className="item">
      <div className="image-rounded-container">
        <div className="image-rounded">
          <img src={logo} width="100%" alt="service" />
        </div>
      </div>
      <h3>{i18n._(title)}</h3>
      <p>{i18n._(content)}</p>
    </div>
  );
}
