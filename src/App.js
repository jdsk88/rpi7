import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/Signup/Signup";
import { UserContext } from "./context/UserContext";
import { AuthService } from "./services/authorization/auth";
import { routes } from "./routes";
import { Views } from "./views/index";
import { DataContext } from "./context/DataContext";
import { HeaderRow } from "./components/header/header";
import { DisplayCheck } from "./services/system/DisplayCheck";
import { devices } from "./assets/data/devices";
import { selectUserLogged } from "./reducers/user.js";
import { AccountLayout } from "./layouts/account/account";

export const App = () => {
  const isLogged = useSelector(selectUserLogged);
  DisplayCheck.EnableDisplayCheck();
  const [user, setUser] = useState({});
  const [register, setRegister] = useState({});

  const initialData = [devices];
  const [data, setData] = useState(initialData);
  const [display] = useState(DisplayCheck.WH);
  const [menu, setMenu] = useState(false);
  if (!isLogged) {
    return (
      <>
          <AccountLayout />
      </>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <DataContext.Provider
              value={{
                data,
                display,
                menu,
                setData,
                setMenu,
                register,
                setRegister,
              }}
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
};

// import React from "react";
// import { useSelector } from "react-redux";
// import { AccountLayout } from "./layouts/account/account";
// import { AdminLayout } from "./layouts/admin/admin";
// import { selectUserLogged } from "./reducers/user.js";
// export const App = () => {
//   const isLogged = useSelector(selectUserLogged);
//   return <>{!isLogged ? <AccountLayout /> : <AdminLayout />}</>;
// };
