import React from "react";
import * as icon from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { AuthService } from "../../../services/authorization/auth";
import { setLogged } from "../../../reducers/user";
import { useDispatch } from "react-redux";
import { routes } from "../../../routes";
const RenderList = ({ open, setOpen, setTitle }) => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    AuthService.removeToken();
    AuthService.removeUser();
    dispatch(setLogged());
    console.log("You were successfully logged out!");
  };
  const firstListData = {
    dashboard: [<icon.Dashboard />, () => {}, "dashboard"],
    orders: [<icon.LocalActivity />, () => {}, "orders"],
    merchants: [<icon.StorefrontSharp />, () => {}, "merchants"],
    products: [<icon.Shop />, () => {}, "products"],
    employers: [<icon.People />, () => {}, "employers"],
    reports: [<icon.BarChart />, () => {}, "reports"],
    messages: [<icon.MessageSharp />, () => {}, "messages"],
    map: [<icon.Map />, () => {}, "map"],
    profile: [<icon.People />, () => {}, "profile"],
  };

  return (
    <div>
      {Object.keys(firstListData).map((key) => (
        <ListItem
          onClick={() => {
            setOpen(!open);
            if (firstListData[key][1]) {
              firstListData[key][1]();
              setTitle(" " + firstListData[key][2]);
            }
          }}
          button
          component={Link}
          to={`/${firstListData[key][2]}`}
        >
          <ListItemIcon>{firstListData[key][0]}</ListItemIcon>
          <ListItemText style={{ textTransform: "capitalize" }} primary={key} />
        </ListItem>
      ))}
      <ListItem
        onClick={() => {
          setOpen(!open);
          handleSignOut();
        }}
        button
        component={Link}
        to={routes.signin}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary={"Log out"} />
      </ListItem>
    </div>
  );
};

export default RenderList;
