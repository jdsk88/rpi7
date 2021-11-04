import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../context/UserContext.js";
import { DataContext } from "../context/DataContext.js";
import { fetchUserById, selectUserLogged } from "../reducers/user.js";
import { AuthLayout } from "../layouts/auth/auth.jsx";
import { Navigation } from "../components/organisms/Navigation/Navigation.jsx";
import { DisplayCheck } from "../services/system/DisplayCheck.js";
import { useDispatch } from "react-redux";

import { userId } from "../services/authorization/auth.js";
import { geo } from "../services/geocoding/geocoding.js";

export const Root = () => {
  const { data } = useContext(DataContext);
  const { user } = useContext(UserContext);
  const isLogged = useSelector(selectUserLogged);
  DisplayCheck.EnableDisplayCheck();
  const dispatch = useDispatch();
  const display = DisplayCheck.WH;
  const [location, setLocation] = useState([]);
  const [formattedAddress, setFormattedAddress] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      geo
        .decoder(
          "json",
          "AIzaSyA2DGhaeOSP81lr0w7kjXoaSW-pFPBmbEc",
          position.coords.latitude,
          position.coords.longitude
        )
        .then((r) => setFormattedAddress(r.data.results[0].formatted_address));

      const geolocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude,
        altitudeAccuracy: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        speed: position.coords.speed,
        formattedAddress: formattedAddress,
      };
      console.log(geolocation);
      setLocation(geolocation);
    });
  }, [formattedAddress]);

  useEffect(() => {
    dispatch(fetchUserById(userId.get()));
  }, [dispatch]);

  return (
    <>
      {!isLogged ? (
        <AuthLayout />
      ) : (
        <UserContext.Provider value={{ user }}>
          <DataContext.Provider value={{ data, display, location }}>
            <Navigation />
          </DataContext.Provider>
        </UserContext.Provider>
      )}
    </>
  );
};
