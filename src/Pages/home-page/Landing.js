import * as React from "react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Information } from "./Information";
import { Services } from "./Services";
import { Shelf } from "./Shelf";
import { Footer } from "./Footer";

export function Landing() {
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
      <Footer />
    </>
  );
}
