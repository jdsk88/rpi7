import React, { useEffect, useState } from "react";
import { Avatar, Divider, ListItemIcon } from "@material-ui/core";
import { useSelector } from "react-redux";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { userData } from "../../../../reducers/user";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { routes } from "../../../../routes";

export const MyDeals = () => {
  const uData = useSelector(userData);
  const [user, setUser] = useState(uData);
  const history = useHistory();
  console.log(user);
  useEffect(() => {
    setUser(uData);
  }, [uData]);
  return (
    <>
      <ListItem>
        <ListItemIcon onClick={()=>{history.push(routes.profile)}}>
          <ArrowBack />
        </ListItemIcon>
        <ListItemAvatar>
          <Avatar
            src={user.avatar}
            alt="avatar"
            style={{ width: 58, height: 58, marginRight: 25 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={`${user.first_name} ${user.last_name}`}
          secondary={user.companyName}
        />
      </ListItem>{" "}
      <Divider />
    </>
  );
};
