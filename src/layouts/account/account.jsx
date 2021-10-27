import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PasswdReset } from "../../components/PasswdReset/PasswdReset";
import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/Signup/Signup";
import { routes } from "../../routes";

export const AccountLayout = () => {
  return (
    <Router>
      <Switch>
        <div
          style={{
            width: "100vw",
            maxHeight: "100vh",
          }}
        >
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
        </div>
      </Switch>
    </Router>
  );
};
