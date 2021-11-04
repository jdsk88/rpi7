import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../context/UserContext.js";
import { DataContext } from "../context/DataContext.js";
import { fetchUserById, selectUserLogged } from "../reducers/user.js";
import { AuthLayout } from "../layouts/auth/auth.jsx";
import { Navigation } from "../components/organisms/Navigation/Navigation.jsx";
import { DisplayCheck } from "../services/system/DisplayCheck.js";
import { useDispatch } from "react-redux";

import { userId } from "../services/authorization/auth.js";

export const Root = () => {
  const { data } = useContext(DataContext);
  const { user } = useContext(UserContext);
  const isLogged = useSelector(selectUserLogged);
  DisplayCheck.EnableDisplayCheck();
  const dispatch = useDispatch();
  const display = DisplayCheck.WH;
  useEffect(() => {
    dispatch(fetchUserById(userId.get()));
  }, [dispatch]);
  return (
    <>
      {!isLogged ? (
        <AuthLayout />
      ) : (
        <UserContext.Provider value={{ user }}>
          <DataContext.Provider value={{ data, display }}>
            <Navigation />
          </DataContext.Provider>
        </UserContext.Provider>
      )}
    </>
  );
};
