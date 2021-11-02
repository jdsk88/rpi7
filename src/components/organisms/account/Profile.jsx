import React, { useEffect, useState } from "react";
import { userData } from "../../../reducers/user";
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
import { useSelector } from "react-redux";

export const AccountProfile = () => {
  const uData = useSelector(userData);
  const [user, setUser] = useState(uData);
  console.log(user);
  useEffect(() => {
    setUser(uData);
  }, [uData]);

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Avatar
            src={user.avatar}
            alt="avatar"
            style={{ width: 128, height: 128 }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h4"
            align="right"
          >
            {`${user.first_name} ${user.last_name}`}
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: "flex-end",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography color="textSecondary" variant="body1">
            {/* {user.email} */}
          </Typography>{" "}
          <Typography color="textSecondary" variant="body1">
            {/* {user.phone} */}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {/* {`${moment().format("hh:mm A")} ${user.payment}`} */}
            {/* {user.payment ? user.payment : ""} */}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {/* {user.city ? user.city : ""} */}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {/* {user.street ? user.street : ""} */}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {/* {user.zipCode ? user.zipCode : ""} */}
          </Typography>
        </Box>

      </CardContent>
      <Divider />
      <AccountProfileDetails />
    </Card>
  );
};
