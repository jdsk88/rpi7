import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";
import { Views } from "./views/index";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={routes.home}>
            <Views.Home />
          </Route>
          <Route path={routes.creator}>
            <Views.ListCreator />
          </Route>
          <Route path={routes.dragable}>
            <Views.DragableList />
          </Route>
          <Route path={routes.todolist}>
            <Views.ListOfLists />
          </Route>
          <Route path={routes.todoview}>
            <Views.SingleToDoList />
          </Route>
          <Route path={routes.nowhere}>
            <Redirect to={routes.home} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
