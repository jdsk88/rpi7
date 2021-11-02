import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

export const RenderProfileList = (data, user) => {
  return (
    <div>
      {Object.keys(data).map((key) => (
          <ListItem key={key}>
            <ListItemIcon>{data[key][0]}</ListItemIcon>
            <ListItemText
              // style={{ textTransform: "capitalize" }}
              primary={data[key][1]}
              secondary={data[key][2]}
            />
          </ListItem>
      ))}
    </div>
  );
};
