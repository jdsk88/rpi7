import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FolderIcon from '@mui/icons-material/Folder';
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  Input,
} from "@material-ui/core";
import { userData } from "../../../reducers/user";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const AccountProfileDetails = (props) => {
  const uData = useSelector(userData);
  const [user, setUser] = useState(uData);
  console.log(user);
  useEffect(() => {
    setUser(uData);
  }, [uData]);
  
  return (
    <>     
        <Divider />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <Typography>{user.role}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>{user.email}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>{user.phone}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>{user.street}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>{user.zipCode}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>{user.city}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>{user.companyName}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>{user.vat}</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography>{user.payment}</Typography>
            </Grid>
          </Grid>
          <List>
      
                <ListItem>
                <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={'Secondary text'}
                  />
                </ListItem>,
         
            </List>
        </CardContent>
        <Divider />
    </>
  );
};
