import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../context/UserContext.js";
import { DataContext } from "../context/DataContext.js";
import { selectUserLogged } from "../reducers/user.js";
import { AuthLayout } from "../layouts/auth/auth.jsx";
import { AppRouter } from "../components/organisms/AppRouter/AppRouter.jsx";

export const Root = () => {
  const { data } = useContext(DataContext);
  const { user } = useContext(UserContext);
  const isLogged = useSelector(selectUserLogged);

  return (
    <>
      {!isLogged ? (
        <AuthLayout />
      ) : (
        <UserContext.Provider value={{ user }}>
          <DataContext.Provider value={{ data }}>
            <AppRouter />
          </DataContext.Provider>
        </UserContext.Provider>
      )}
    </>
  );
};
