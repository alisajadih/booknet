import * as React from "react";
import { Landing } from "Pages/home-page";
import { Route } from "react-router-dom";
import { Login } from "Pages/Login";
import { Signup } from "Pages/Signup";
import { Profile } from "Pages/Profile";

export function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/profile" exact component={Profile} />
    </React.Fragment>
  );
}
