import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "./context/UserContext";
import { DataContext } from "./context/DataContext";
import { selectUserLogged } from "./reducers/user.js";
import { AccountLayout } from "./layouts/account/account";
import { TopBar } from "./components/appBar/appBar";

export const App = () => {
  const { data } = useContext(DataContext);
  const { user } = useContext(UserContext);
  const isLogged = useSelector(selectUserLogged);

  return (
    <>
        {!isLogged ? (
          <AccountLayout />
        ) : (
          <UserContext.Provider value={{ user }}>
            <DataContext.Provider value={{ data }}>
              <TopBar />
            </DataContext.Provider>
          </UserContext.Provider>
        )}
        </>
  );
};
