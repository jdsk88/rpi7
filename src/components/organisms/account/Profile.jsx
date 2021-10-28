import React, { useState } from 'react'

import moment from "moment";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { AccountProfileDetails } from "./ProfileDetails";

const AccountProfile = (props) => {
  const [file, setFile] = useState({});
  const user = {
    avatar: file,
    city: "Los Angeles",
    country: "USA",
    jobTitle: "Senior Developer",
    name: "Katarina Smith",
    timezone: "GTM-7",
  };
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 100,
              width: 100,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${moment().format("hh:mm A")} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <AccountProfileDetails setFile={setFile} />
    </Card>
  );
};

export default AccountProfile;
