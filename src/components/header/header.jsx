import React, { useState, useContext } from "react";
import { styles } from "../../assets/styles/index";
import { DataContext } from "../../context/DataContext";
import { icon } from "../../assets/icons";
import { ButtonList } from "../buttonList/buttonList";
import { AuthService } from "../../services/authorization/auth";
import { setLogged } from "../../reducers/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export const HeaderRow = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { display, setMenu } = useContext(DataContext);
  const handleSignOut = () => {
    AuthService.removeToken();
    AuthService.removeUser();
    dispatch(setLogged());
    history.push("/");
    console.log("You were successfully logged out!");
  };
  const [headerData] = useState({
    home: [icon.faHouseUser, "Dashboard", () => setMenu(false), "home"],
    settings: [icon.faCogs, "Settings", () => setMenu(false), "settings"],
    logout: [icon.faCogs, "Settings", () => handleSignOut(), ""],
  });

  return (
    <>
      <div style={styles.header}>
        <ButtonList Data={headerData} display={display} />
      </div>
    </>
  );
};
