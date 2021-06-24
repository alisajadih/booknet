import * as React from "react";
import { Landing } from "Pages/home-page";
import { Route } from "react-router-dom";
import { Login } from "Pages/Login";
import { Signup } from "Pages/Signup";
import { Profile } from "Pages/Profile";
import { ShelfDetail } from "Pages/shelf-detail";
import { BookDetail } from "Pages/book-detail";

export function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/shelfs/:shelfName" exact component={ShelfDetail} />
      <Route path="/shelfs/:shelfName/:id" component={BookDetail} />
    </React.Fragment>
  );
}
