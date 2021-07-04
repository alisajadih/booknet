import * as React from "react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Information } from "./Information";
import { Services } from "./Services";
import { Shelf } from "./Shelf";
import { Footer } from "./Footer";
import { useRTLBody } from "shared/hooks";
import { Contact } from "./Contact";

export function Landing() {
  useRTLBody(false);

  return (
    <>
      <Navbar />
      <div className="clear-fix"></div>
      <Header />
      <Information />
      <Services />
      <div className="clear-fix"></div>
      <Shelf />
      <div className="clear-fix"></div>
      <Contact />
      <Footer />
    </>
  );
}
