import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { DataContext } from "../../context/DataContext";
import { routes } from "../../routes";
import { Views } from "../../views/index";
import { HeaderRow } from "../../components/header/header";
import { DisplayCheck } from "../../services/system/DisplayCheck";
import { devices } from "../../assets/data/devices";
export const AdminLayout = () => {
    DisplayCheck.EnableDisplayCheck();
    const [user, setUser] = useState({});
    const initialData = [devices];
    const [data, setData] = useState(initialData);
    const [display] = useState(DisplayCheck.WH);
    const [menu, setMenu] = useState(false);
    return (
        <>
          <BrowserRouter>
            <Switch>
              <UserContext.Provider value={{ user, setUser }}>
                <DataContext.Provider
                  value={{ data, display, menu, setData, setMenu }}
                >
                  <HeaderRow />
                  <Route path={routes.home}>
                    <Views.Home />
                  </Route>
                  <Route path={routes.settings}>
                    <Views.Settings />
                  </Route>
                </DataContext.Provider>
              </UserContext.Provider>
    
              <Route path={routes.nowhere}>
                <Redirect to={routes.home} />
              </Route>
            </Switch>
          </BrowserRouter>
        </>
      );
}