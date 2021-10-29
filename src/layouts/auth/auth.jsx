import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PasswdReset } from "../../components/organisms/Auth/PasswdReset/PasswdReset";
import { SignIn } from "../../components/organisms/Auth/SignIn/SignIn";
import { SignUp } from "../../components/organisms/Auth/Signup/Signup";
import { routes } from "../../routes";

export const AuthLayout = () => {
  return (
    <Router>
      <Switch>
        {/* <div
          style={{
            width: "100vw",
            maxHeight: "100vh",
          }}
        > */}
          <Route path={routes.signin}>
            <SignIn />
          </Route>
          <Route path={routes.signup}>
            <SignUp />
          </Route>
          <Route path={routes.reset}>
            <PasswdReset />
          </Route>
          <Route path={routes.nowhere}>
            <Redirect to={routes.signin} />
          </Route>
        {/* </div> */}
      </Switch>
    </Router>
  );
};
