import * as React from "react";
import { useRTLBody } from "shared/hooks";
import { ShelfsAndBookDetailNavbar } from "shared/ShelfsAndBookDetailNavbar";
import { BookCardInformation } from "./BookCardInformation";
import {Comments} from './Comments'
import {Footer} from '../home-page/Footer'

export function BookDetail(props) {
  useRTLBody();
  return (
    <React.Fragment>
      <ShelfsAndBookDetailNavbar />
      <BookCardInformation />
      <Comments/>
      <Footer/>
    </React.Fragment>
  );
}
