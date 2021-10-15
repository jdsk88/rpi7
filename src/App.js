import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";
import { Views } from "./views/index";
import { DisplayCheck } from "./services/DisplayCheck";
import { DataContext } from "./context/DataContext";
import { HeaderRow } from "./components/header/header";

export const App = () => {
  DisplayCheck.EnableDisplayCheck();
  const initialData = [];
  const [data, setData] = useState(initialData);
  const [display] = useState(DisplayCheck.WH);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <DataContext.Provider value={{ data, display, menu, setData, setMenu }}>
        <BrowserRouter>
          <HeaderRow />
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
      </DataContext.Provider>
    </>
  );
};
