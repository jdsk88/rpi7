import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const RenderList = ({ open, setOpen, setTitle },data) => {

  return (
    <div>
      {Object.keys(data).map((key) => (
        <ListItem
          key={key}
          onClick={() => {
            setOpen(!open);
            if (data[key][1]) {
              data[key][1]();
              setTitle(" " + data[key][2]);
            }
          }}
          button
          component={Link}
          to={`/${data[key][2]}`}
        >
          <ListItemIcon>{data[key][0]}</ListItemIcon>
          <ListItemText style={{ textTransform: "capitalize" }} primary={key} />
        </ListItem>
      ))}
     
    </div>
  );
};

export default RenderList;
