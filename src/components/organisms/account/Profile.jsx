import React, { useEffect, useState } from "react";
import { userData } from "../../../reducers/user";
import { Avatar, Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import { profileData } from "./listData";
import { RenderProfileList } from "./listItems";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
export const AccountProfile = () => {
  const uData = useSelector(userData);
  const [user, setUser] = useState(uData);
  console.log(user);
  useEffect(() => {
    setUser(uData);
  }, [uData]);

  return (
    <>
      <ListItem>
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
      {RenderProfileList(profileData.profile)}
    </>
  );
};
