import * as React from "react";
import { i18n } from "@lingui/core";
import Hogo from "styles/imgs/services/hogo.jpg";
import voltaire from "styles/imgs/services/voltaire.jpg";
import soghrat from "styles/imgs/services/soghrat.jpg";
import shekspier from "styles/imgs/services/shekspier.jpg";
import { ServiceItem } from "./ServiceItem";
import { HASHES } from "shared/constants";
import { useScrollByRouteHash } from "shared/hooks";

const serviceItem = [
  {
    logo: Hogo,
    title: i18n._("victor hogo"),
    content: i18n._("victor hogo content"),
  },
  {
    logo: voltaire,
    title: i18n._("velter"),
    content: i18n._("velter content"),
  },
  {
    logo: soghrat,
    title: i18n._("soqrat"),
    content: i18n._("soqrat content"),
  },
  {
    logo: shekspier,
    title: i18n._("shekspier"),
    content: i18n._("soqrat content"),
  },
];

export function Services() {
  const ref =useScrollByRouteHash({hash : HASHES.SERVICES})
  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="row">
          <h2>{i18n._("speach of the big ")}</h2>
          <span className="underline"></span>
          <div className="service-itmes">
            {serviceItem.map((item , index) => (
              <ServiceItem {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
